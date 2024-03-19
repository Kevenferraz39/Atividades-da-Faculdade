// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../../model/Classcrud.js';

// Verificando se o ID foi enviado por POST
if (req.body.id) {
    const id = req.body.id;

    // Criando uma instância de Crud
    const sql = new Crud();

    // Deletando o registro na tabela 'lista'
    sql.deletarBD('lista', 'idLista', id);
}
