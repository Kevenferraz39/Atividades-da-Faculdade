// Definindo variáveis com informações da conexão com o banco
const HOST = 'localhost';
const USER = 'root';
const SENHA = '';
const DATABASE = 'bd_puzzle';

// Criando uma classe de conexão
class Conexao {
    constructor() {
        this.conectarBanco();
    }

    // Método que faz a conexão com o banco
    conectarBanco() {
        try {
            this.conexao = new mysqli(HOST, USER, SENHA, DATABASE);
            return this.conexao;
        } catch (error) {
            console.error('ERRO! ' + error.message);
            throw error;
        }
    }
}

// Exemplo de uso:
const conexao = new Conexao();
