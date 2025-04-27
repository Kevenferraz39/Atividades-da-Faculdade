
function dividir(){
    let numero = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    // Verifica se o segundo número é zero para evitar divisão por zero
    if (isNaN(numero) || isNaN(numero2)) {
        alert("Você digitou um valor inválido.");
    } else if (numero2 === 0) {
        alert("Divisão por zero não é permitida.");
    } else {
        let div = numero / numero2;
        alert(`Resultado da divisão: ${div}`);
    }
}