// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../../model/Classcrud.js';

// Verificando se os dados foram enviados por POST
if (req.body.nome && req.body.email && req.body.senha) {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    // Inserindo os dados no banco de dados
    const sql = new Crud();
    sql.inserirBD('aluno', 'nome, email, senha', `'${nome}', '${email}', '${senha}'`);
}
