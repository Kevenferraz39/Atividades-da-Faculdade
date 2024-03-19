// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../../model/Classcrud.js';

// Verificando se os dados foram enviados por POST
if (req.body.nome && req.body.email && req.body.senha && req.body.pontos && req.body.id) {
    const id = req.body.id;
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const pontos = req.body.pontos;

    // Criando uma instância de Crud
    const sql = new Crud();

    // Editando os itens na tabela 'aluno'
    sql.editarItens('aluno', `nome = '${nome}', email = '${email}', senha = '${senha}', pontos = '${pontos}'`, 'idAluno', id);
}
