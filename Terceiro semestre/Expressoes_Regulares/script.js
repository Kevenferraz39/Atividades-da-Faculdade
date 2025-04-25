// Expressão Regular para validar e-mails
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validarEmail(email) {
  return emailRegex.test(email);
}

fetch('../Banco_de_dados_json/historico2.json')
  .then(response => response.json())
  .then(dados => {
    const container = document.getElementById('resultado');
    dados.forEach((item, index) => {
      // Convertendo os dados para minúsculo
      const nome = item.nome ? item.nome.toLowerCase() : '';
      const email = item.email ? item.email.toLowerCase() : '';

      const valido = validarEmail(email);
      const linha = document.createElement('p');
      
      // Definindo a cor do texto baseado na validade
      linha.textContent = `Índice ${index} | ${nome} | ${email} → Válido? ${valido}`;
      
      if (valido) {
        linha.style.color = 'green';  // E-mail válido
      } else {
        linha.style.color = 'red';    // E-mail inválido
      }
      
      container.appendChild(linha);
    });
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));


/*
  const dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;


function converterDataParaBR(Data) {
  if (!dataRegex.test(Data)) return 'Formato inválido';
  const [dia, mes, ano] = Data.split('/');
  return `${ano}-${mes}-${dia}`;
}

fetch('../Banco_de_dados_json/historico2.json')
  .then(response => response.json())
  .then(dados => {
    const container = document.getElementById('resultado');
    dados.forEach((item, index) => {
      const dataOriginal = item.Data; // Supondo que o campo seja "data"
      const dataConvertida = converterDataParaBR(dataOriginal);
      const linha = document.createElement('p');
      linha.textContent = `Índice ${index} | ${item.nome} | ${dataOriginal} → ${dataConvertida}`;
      container.appendChild(linha);
    });
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));
*/