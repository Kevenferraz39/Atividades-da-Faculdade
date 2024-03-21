/*document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    document.getElementById('loading').style.display = 'block'; // Exibe a página de carregamento
    
    // Medir o tempo de carregamento da página atual
    var startTime = new Date().getTime();

    // Simular o envio de dados (substitua esta parte com o seu código real de envio de dados)
    setTimeout(function() {
        var endTime = new Date().getTime();
        var pageLoadTime = endTime - startTime;
        var estimatedDataLoadTime = calcularTempoDados(); // Função para calcular o tempo de carregamento dos dados
        
        var tempoTotal = Math.max(pageLoadTime, estimatedDataLoadTime); // Tempo total é o máximo entre o tempo de carregamento da página e o tempo estimado de carregamento dos dados
        
        setTimeout(function() {
            window.location.href = 'loadingPage.html'; // Redireciona para a página de carregamento
        }, tempoTotal);
    }, 1000); // Simulação de envio de dados em 1 segundo (1000ms)
});

// Função para calcular o tempo de carregamento dos dados (exemplo)
function calcularTempoDados() {
    // Aqui você pode implementar a lógica para estimar o tempo de carregamento dos dados
    // Por exemplo, calcular com base no tamanho dos dados e na velocidade da internet
    return 1000; // Exemplo: 3 segundos
}
*/

document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    document.getElementById('loading').style.display = 'block'; // Exibe a página de carregamento
    
    // Medir o tempo de carregamento da página atual
    var startTime = new Date().getTime();

    // Simular o envio de dados (substitua esta parte com o seu código real de envio de dados)
    setTimeout(function() {
        var endTime = new Date().getTime();
        var pageLoadTime = endTime - startTime;
        var tamanhoDados = 500000; // Exemplo de tamanho dos dados em bytes
        var velocidadeInternet = 10; // Exemplo de velocidade da internet em Mbps
        var estimatedDataLoadTime = calcularTempoDados(tamanhoDados, velocidadeInternet); // Função para calcular o tempo de carregamento dos dados
        
        var tempoTotal = Math.max(pageLoadTime, estimatedDataLoadTime); // Tempo total é o máximo entre o tempo de carregamento da página e o tempo estimado de carregamento dos dados
        
        setTimeout(function() {
            window.location.href = 'loadingPage.php'; // Redireciona para a página de carregamento
        }, tempoTotal);
    }, 1); // Simulação de envio de dados em 1 segundo (1000ms)
});

// Função para calcular o tempo de carregamento dos dados com base no tamanho dos dados e na velocidade da conexão
function calcularTempoDados(tamanhoDados, velocidadeInternet) {
    // Suponha que o tamanho dos dados esteja em bytes e a velocidade da internet esteja em Mbps
    // Converta a velocidade para bytes por segundo
    var velocidadeBytesPorSegundo = (velocidadeInternet * 125000); // 1 Mbps = 125000 bytes/s

    // Calcule o tempo de carregamento dos dados (em milissegundos)
    var tempoCarregamentoDados = (tamanhoDados / velocidadeBytesPorSegundo) * 1000; // Convertendo para milissegundos
    return tempoCarregamentoDados;
}
