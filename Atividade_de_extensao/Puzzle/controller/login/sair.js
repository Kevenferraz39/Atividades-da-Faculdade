// Início de uma nova sessão
import session from 'express-session';

// Middleware para remover as variáveis de sessão
const logoutHandler = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Erro ao encerrar a sessão:", err);
            res.status(500).send("Erro ao encerrar a sessão");
        } else {
            res.redirect('../../view/home.html');
        }
    });
};

export default {
    logoutHandler
};
