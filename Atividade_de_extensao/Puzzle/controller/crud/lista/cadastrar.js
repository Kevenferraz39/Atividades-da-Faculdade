// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../../model/Classcrud.js';

// Verificando se o nome foi enviado por POST
if (req.body.nome) {
    const nome = req.body.nome;

    // Criando uma instância de Crud
    const sql = new Crud();

    // Inserindo os dados na tabela 'lista'
    sql.inserirBD('lista', 'nomeLista', `'${nome}'`);
}
