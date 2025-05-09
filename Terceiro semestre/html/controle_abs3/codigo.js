const PLANILHA_ID = "1cXZ5Jh6stvygynOnWbzWopHjdiw3xVliqrYBjJ5H8as";
const ABA_DADOS_EQUIPE = "dadosEquipe_2";

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}

function obterTeamLeaders() {
  const sheet = SpreadsheetApp.openById(PLANILHA_ID).getSheetByName(ABA_DADOS_EQUIPE);
  const dados = sheet.getDataRange().getValues();
  const hoje = new Date();
  const teamLeaders = new Set();
  const desligadosInvalidos = new Set();

  for (let i = 1; i < dados.length; i++) {
    const teamLeader = dados[i][3];
    const colaborador = dados[i][5];
    const statusHC = dados[i][11];
    const dataDesligamento = dados[i][12];

    if (teamLeader) teamLeaders.add(teamLeader);

    if (
      colaborador === teamLeader &&
      statusHC === "DESLIGADO" &&
      dataDesligamento instanceof Date
    ) {
      const dias = (hoje - dataDesligamento) / (1000 * 60 * 60 * 24);
      if (dias > 30) desligadosInvalidos.add(colaborador.trim().toUpperCase());
    }
  }

  return [...teamLeaders]
    .filter(nome => !desligadosInvalidos.has(nome.trim().toUpperCase()))
    .map(nome => ({ nome }));
}

function responderNome(nomeSelecionado) {
  const sheet = SpreadsheetApp.openById(PLANILHA_ID).getSheetByName(ABA_DADOS_EQUIPE);
  const dados = sheet.getDataRange().getValues();
  const resultado = [];

  for (let i = 1; i < dados.length; i++) {
    const [areaHead, idgroot, ldap, teamLeader, supervisor, colaborador, turno,
      escala, turmaEscala, empresa, processo, statusHC, dataDemissao, , statusEntrada] = dados[i];

    if (teamLeader !== nomeSelecionado) continue;

    const entrada = (statusEntrada || "").toUpperCase().trim();
    let statusAbs = "";

    if (entrada === "JUSTIFICAR") {
      statusAbs = "";
    } else if (["OK", "NOK", "N/A"].includes(entrada)) {
      statusAbs = "Presente";
    } else {
      continue;
    }

    resultado.push({
      AREA_HEAD: areaHead,
      IDGROOT: idgroot,
      LDAP: ldap,
      TEAM_LEADER: teamLeader,
      SUPERVISOR: supervisor,
      COLABORADOR: colaborador,
      TURNO: turno,
      ESCALA: escala,
      TURMA_ESCALA: turmaEscala,
      EMPRESA: empresa,
      PROCESSO: processo,
      STATUS_HC: statusHC,
      DATA_DEMISSAO: dataDemissao,
      STATUS_abs: statusAbs
    });
  }

  return resultado;
}

function registrarPresenca(nomeSelecionado, listaStatus) {
  const planilha = SpreadsheetApp.openById(PLANILHA_ID);
  const abaDados = planilha.getSheetByName(ABA_DADOS_EQUIPE);
  const abaHistorico = planilha.getSheetByName("Historico_2");

  if (!abaHistorico) return "Erro: Aba 'Historico_2' não encontrada.";

  const dados = abaDados.getDataRange().getValues();
  const registros = [];
  const hoje = new Date();

  for (let i = 1; i < dados.length; i++) {
    const [areaHead, idgroot, ldap, teamLeader, supervisor, colaborador, turno,
      escala, turmaEscala, empresa, processo, statusHC, dataDemissao, , statusEntrada] = dados[i];

    if (teamLeader !== nomeSelecionado) continue;

    let statusPresenca = "NÃO DEFINIDO";
    const entrada = (statusEntrada || "").toUpperCase().trim();
    let qtdDias = 1;

    if (["OK", "NOK", "N/A"].includes(entrada)) {
      statusPresenca = "Presente";
    } else if (entrada === "JUSTIFICAR") {
      const index = listaStatus.findIndex(item =>
        item.COLABORADOR?.toUpperCase().trim() === colaborador?.toUpperCase().trim() &&
        item.TURNO?.toUpperCase().trim() === turno?.toUpperCase().trim() &&
        item.EMPRESA?.toUpperCase().trim() === empresa?.toUpperCase().trim() &&
        item.PROCESSO?.toUpperCase().trim() === processo?.toUpperCase().trim()
      );
      if (index !== -1) {
        statusPresenca = listaStatus[index].STATUS_abs || "NÃO DEFINIDO";
        if (statusPresenca === "Banco-de-Horas") {
          qtdDias = parseInt(listaStatus[index].QTD_DIAS || "1", 10);
        }
      }
    }

    for (let d = 0; d < qtdDias; d++) {
      const dataHora = Utilities.formatDate(new Date(hoje.getTime() + d * 86400000), Session.getScriptTimeZone(), "dd/MM/yyyy");
      registros.push([
        dataDemissao || "", statusHC || "", areaHead || "", supervisor || "", teamLeader || "",
        idgroot || "", ldap || "", colaborador || "", turno || "", escala || "",
        turmaEscala || "", empresa || "", processo || "", statusPresenca, dataHora
      ]);
    }
  }

  if (registros.length > 0) {
    const linhaInicial = Math.max(abaHistorico.getLastRow() + 1, 2);
    abaHistorico.getRange(linhaInicial, 1, registros.length, registros[0].length).setValues(registros);
    return `Presença registrada com sucesso para ${nomeSelecionado}.`;
  } else {
    return `Nenhum registro encontrado para salvar para ${nomeSelecionado}.`;
  }
}
