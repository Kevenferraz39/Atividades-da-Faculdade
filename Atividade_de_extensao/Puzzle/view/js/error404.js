// Intercepta todos os cliques em links dentro do documento
document.addEventListener('click', function(event) {
    // Verifica se o elemento clicado é um link
    if (event.target.tagName === 'A') {
        // Obtém o href do link
        var href = event.target.getAttribute('href');
        // Verifica se o recurso existe
        fetch(href)
            .then(function(response) {
                // Verifica o status da resposta
                if (!response.ok) {
                    // Se a resposta não for bem-sucedida (404), redireciona para a página de erro 404
                    window.location.href = 'error404.html';
                }
            })
            .catch(function(error) {
                console.error('Ocorreu um erro ao verificar o recurso:', error);
            });

        // Impede o comportamento padrão do link para evitar que a página recarregue
        event.preventDefault();
    }
});
