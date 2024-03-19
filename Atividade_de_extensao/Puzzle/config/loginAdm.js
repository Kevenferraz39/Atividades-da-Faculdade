// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../model/Classcrud.js';

const emailAdm = "Puzzle@gmail.com";
const senhaAdm = "0408Kw1234$#@!";

const sql = new Crud();
sql.consultarItemId('email', 'aluno', 'email', `'${emailAdm}'`);
const resultado = sql.getResultado();

// Verificando se não há resultados
if (resultado.length < 1) {
    const nome = "Puzzle";
    const senhapass = // Aqui você pode usar uma função de hash para senha, como bcrypt

    sql.inserirBD('aluno', 'nome, email, senha', `'${nome}', '${emailAdm}', '${senhapass}'`);
}
 