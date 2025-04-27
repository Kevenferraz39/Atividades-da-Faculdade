const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    const numero = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (isNaN(numero) || isNaN(numero2)) {
      console.log('Você digitou um valor inválido.');
    } else if (numero2 === 0) {
      console.log('Divisão por zero não é permitida.');
    } else {
      const resultado = numero / numero2;
      console.log(`Resultado da divisão: ${resultado}`);
    }

    rl.close();
  });
});
