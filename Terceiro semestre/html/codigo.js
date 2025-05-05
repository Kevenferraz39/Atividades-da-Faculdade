const PLANILHA_ID = "1cXZ5Jh6stvygynOnWbzWopHjdiw3xVliqrYBjJ5H8as";
const ABA_DADOS_EQUIPE = "dadosEquipe";

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}

function obterTeamLeaders() {
  const sheet = SpreadsheetApp.openById(PLANILHA_ID).getSheetByName(ABA_DADOS_EQUIPE);
  const data = sheet.getRange("D2:D" + sheet.getLastRow()).getValues().flat();
  const nomesUnicos = [...new Set(data)].filter(n => n !== "");
  return nomesUnicos.map(nome => ({ nome }));
}

function responderNome(nomeSelecionado) {
  const sheet = SpreadsheetApp.openById(PLANILHA_ID).getSheetByName(ABA_DADOS_EQUIPE);
  const dados = sheet.getDataRange().getValues();
  const hoje = new Date();
  const resultado = [];

  const statusPermitidos = [
    "DESLIGADO", "ATIVO", "TRANSFERIDO", "AFASTADA GRAVIDEZ", "AFASTADO",
    "TRANSFERÊNCIA MELICIDADE", "TRANSFERÊNCIA BRSP11", "TRANSFERÊNCIA BRSP04",
    "TRANSFERÊNCIA BRRC01", "TRANSFERÊNCIA BRSP02", "TRANSFERÊNCIA SORTATION",
    "TRANSFERÊNCIA BRSP14", "TRANSFERÊNCIA BRSP06"
  ];

  const statusComValidade = [
    "DESLIGADO", "TRANSFERIDO", "TRANSFERÊNCIA MELICIDADE", "TRANSFERÊNCIA BRSP11",
    "TRANSFERÊNCIA BRSP04", "TRANSFERÊNCIA BRRC01", "TRANSFERÊNCIA BRSP02",
    "TRANSFERÊNCIA SORTATION", "TRANSFERÊNCIA BRSP14", "TRANSFERÊNCIA BRSP06"
  ];

  for (let i = 1; i < dados.length; i++) {
    const [areaHead, idgroot, ldap, teamLeader, supervisor, colaborador, turno,
      escala, turmaEscala, empresa, processo, statusHC, dataDemissao] = dados[i];

    if (teamLeader !== nomeSelecionado) continue;

    let incluir = statusPermitidos.includes(statusHC);
    if (statusComValidade.includes(statusHC)) {
      if (dataDemissao instanceof Date) {
        const dias = (hoje - dataDemissao) / (1000 * 60 * 60 * 24);
        if (dias > 30) incluir = false;
      } else {
        incluir = false;
      }
    }

    if (incluir) {
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
        DATA_DEMISSAO: dataDemissao
      });
    }
  }

  return resultado;
}

function registrarPresenca(nomeSelecionado, listaStatus) {
  const planilha = SpreadsheetApp.openById(PLANILHA_ID);
  const abaDados = planilha.getSheetByName(ABA_DADOS_EQUIPE);
  const abaHistorico = planilha.getSheetByName("Historico");

  if (!abaHistorico) {
    return "Erro: Aba 'Historico' não encontrada.";
  }

  const dados = abaDados.getDataRange().getValues();
  const registros = [];
  const dataHora = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss");

  for (let i = 1; i < dados.length; i++) {
    const [areaHead, idgroot, ldap, teamLeader, supervisor, colaborador, turno,
      escala, turmaEscala, empresa, processo, statusHC, dataDemissao] = dados[i];

    if (teamLeader !== nomeSelecionado) continue;

    const index = listaStatus.findIndex(item =>
      item.COLABORADOR?.toUpperCase().trim() === colaborador?.toUpperCase().trim() &&
      item.TURNO?.toUpperCase().trim() === turno?.toUpperCase().trim() &&
      item.EMPRESA?.toUpperCase().trim() === empresa?.toUpperCase().trim() &&
      item.PROCESSO?.toUpperCase().trim() === processo?.toUpperCase().trim()
    );

    if (index !== -1) {
      const statusPresenca = listaStatus[index].STATUS_abs || "NÃO DEFINIDO";

      // Ordem conforme solicitada:
      registros.push([
        dataDemissao || "",
        statusHC || "",               // STATUS_HC
        areaHead || "",              // AREA_HEAD
        supervisor || "",            // SUPERVISOR
        teamLeader || "",            // TEAM_LEADER
        idgroot || "",               // IDGROOT
        ldap || "",                  // LDAP
        colaborador || "",           // COLABORADOR
        turno || "",                 // TURNO
        escala || "",                // ESCALA
        turmaEscala || "",           // TURMA_ESCALA
        empresa || "",               // EMPRESA
        processo || "",              // PROCESSO
        statusPresenca,              // STATUS_abs
        dataHora                     // DATA_HORA
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

