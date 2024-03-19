document.getElementById("recuperarSenhaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;

    fetch('/recuperarSenha', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao recuperar senha');
        }
        return response.json();
    })
    .then(data => {
        // Processar a resposta do servidor, se necessário
        console.log(data);
    })
    .catch(error => {
        console.error('Erro:', error.message);
    });
});