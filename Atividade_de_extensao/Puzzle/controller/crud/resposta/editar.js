// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../../model/Classcrud.js';

// Verificando se os dados foram enviados por POST
if (req.body.resposta && req.body.exercicio && req.body.aluno && req.body.id) {
    const id = req.body.id;
    const resposta = req.body.resposta;
    const exercicio = req.body.exercicio;
    const aluno = req.body.aluno;

    // Criando uma instância de Crud
    const sql = new Crud();

    // Editando os itens na tabela 'resposta'
    sql.editarItens('resposta', `resposta = '${resposta}', idExercicio = ${exercicio}, idAluno = ${aluno}`, 'idResposta', id);
}
