// Importando a classe Conexao do arquivo ClassConexao.js
import Conexao from '../../config/ClassConexao.js';

// Verificando se os dados foram enviados por POST
if (req.method === 'POST' && req.body.nome && req.body.email && req.body.senha) {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const senhaConf = req.body.senhaConf;

    // Verificando se as senhas coincidem
    if (senha === senhaConf) {
        // Realizando a conexão com o banco de dados
        const conectar = new Conexao();
        const conexao = conectar.conectarBanco();

        // Criptografando a senha
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        bcrypt.hash(senha, saltRounds, (err, senhapass) => {
            if (err) {
                console.error('Erro ao criptografar a senha:', err.message);
                return;
            }

            // Inserindo os dados no banco de dados
            const sqlInsert = `INSERT INTO aluno(nome, email, senha) VALUES ('${nome}', '${email}', '${senhapass}')`;
            conexao.query(sqlInsert, (error, result) => {
                if (error) {
                    console.error('Erro ao inserir os dados no banco de dados:', error.message);
                    return;
                }
                // Redirecionando após o sucesso da inserção
                res.redirect('../../view/home.php');
            });
        });
    } else {
        console.log("Senha incorreta");
    }
}
