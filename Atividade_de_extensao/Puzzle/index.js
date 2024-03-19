// Importando o módulo Express
import express from 'express';
const app = express();

// Definindo uma rota para redirecionar
app.get('/', (req, res) => {
    res.redirect('/view');
});

// Iniciando o servidor na porta desejada
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
