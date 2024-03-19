import { emailAdm, senhaAdm } from '../../../config/loginAdm.js';

// Middleware para verificar se o usuário é um administrador
const adminAuthMiddleware = (req, res, next) => {
    if (req.session.email && req.session.senha) {
        if (req.session.email !== emailAdm || req.session.senha !== senhaAdm) {
            return res.redirect('/Puzzle-website/');
        }
    } else {
        return res.redirect('/Puzzle-website/');
    }
    next();
};

export default {
    adminAuthMiddleware
};
