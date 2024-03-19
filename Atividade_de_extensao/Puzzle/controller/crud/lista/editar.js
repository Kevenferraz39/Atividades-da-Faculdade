// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../../model/Classcrud.js';

// Verificando se o nome e o ID foram enviados por POST
if (req.body.nome && req.body.id) {
    const id = req.body.id;
    const nome = req.body.nome;

    // Criando uma instância de Crud
    const sql = new Crud();

    // Atualizando os dados na tabela 'lista'
    sql.atualizarBD('lista', 'nomeLista', `'${nome}'`, 'idLista', id);
}
