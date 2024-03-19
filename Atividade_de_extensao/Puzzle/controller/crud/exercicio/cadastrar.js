// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../../model/Classcrud.js';

// Verificando se os dados foram enviados por POST
if (req.body.resposta && req.body.lista) {
    const resposta = req.body.resposta;
    const idLista = req.body.lista;

    // Criando uma instância de Crud
    const sql = new Crud();

    // Inserindo os dados na tabela 'exercicio'
    sql.inserirBD('exercicio', 'resposta, idLista', `'${resposta}', ${idLista}`);
}
