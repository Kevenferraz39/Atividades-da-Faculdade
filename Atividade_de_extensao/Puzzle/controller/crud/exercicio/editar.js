// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../../model/Classcrud.js';

// Verificando se os dados foram enviados por POST
if (req.body.idLista && req.body.resposta && req.body.id) {
    const id = req.body.id;
    const resposta = req.body.resposta;
    const idLista = req.body.idLista;

    // Criando uma instância de Crud
    const sql = new Crud();

    // Editando os itens na tabela 'exercicio'
    sql.editarItens('exercicio', `resposta = '${resposta}', idLista = ${idLista}`, 'idExercicio', id);
}
