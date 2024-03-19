// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../../model/Classcrud';

// Criando uma instância de Crud
const sql = new Crud();

// Consultando todos os registros da tabela 'aluno'
sql.consultarBD('aluno', '*');

// Obtendo o resultado da consulta
const resultado = sql.getResultado();
