// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../../model/Classcrud.js';

// Verificando se os dados foram enviados por POST
if (req.body.resposta && req.body.exercicio && req.body.aluno) {
    const resposta = req.body.resposta;
    const exercicio = req.body.exercicio;
    const aluno = req.body.aluno;

    // Criando uma instância de Crud
    const sql = new Crud();

    // Inserindo os dados na tabela 'resposta'
    sql.inserirBD('resposta', 'resposta, idExercicio, idAluno', `'${resposta}', ${exercicio}, ${aluno}`);
}
