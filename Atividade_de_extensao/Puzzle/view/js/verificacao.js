// Verificar se a sessão está iniciada e se as variáveis de sessão 'email' e 'senha' estão definidas
if (req.session.email && req.session.senha) {
    res.redirect('home.html');
}
