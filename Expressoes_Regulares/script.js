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
      linha.textContent = `Índice ${index} | ${nome} | ${email} → Válido? ${valido}`;
      container.appendChild(linha);
    });
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));
