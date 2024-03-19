// Importando a classe Crud do arquivo ClassCrud.js
import Crud from '../../../model/Classcrud.js';

// Criando uma instância de Crud
const sql = new Crud();

// Consultando todos os registros da tabela 'exercicio'
sql.consultarBD('exercicio', '*');

// Obtendo o resultado da consulta
const resultado = sql.getResultado();
