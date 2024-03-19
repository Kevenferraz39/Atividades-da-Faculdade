// Importando a classe Conexao do arquivo ClassConexao.js
const Conexao = require('../../config/ClassConexao.js');

class Crud extends Conexao {
    constructor() {
        super();
        this.crud = '';
        this.resultado = null;
    }

    // Métodos especiais
    getResultado() {
        return this.resultado;
    }

    // Inserção no banco
    inserirBD(tabela, colunas, valores) {
        const conexao = this.conectarBanco();

        this.crud = `INSERT INTO ${tabela}(${colunas}) VALUES (${valores})`;
        this.resultado = conexao.query(this.crud, (error, result) => {
            if (error) {
                console.error("Erro no cadastro:", error.message);
            }
        });
    }

    consultarBD(tabela, colunas) {
        const conexao = this.conectarBanco();

        this.crud = `SELECT ${colunas} FROM ${tabela}`;
        this.resultado = conexao.query(this.crud, (error, result) => {
            if (error) {
                console.error("Erro na consulta:", error.message);
            }
            if (result.length === 0) {
                console.log("Nenhum dado cadastrado");
            }
        });
    }

    consultarItem(colunas, tabela, colunaId, idItem) {
        const conexao = this.conectarBanco();

        this.crud = `SELECT ${colunas} FROM ${tabela} WHERE ${colunaId} = ${idItem}`;
        this.resultado = conexao.query(this.crud, (error, result) => {
            if (error) {
                console.error("Erro na consulta:", error.message);
            }
            if (result.length === 0) {
                console.log("Nenhum dado cadastrado");
            }
        });
    }

    consultarItemId(colunas, tabela, colunaNome, item) {
        const conexao = this.conectarBanco();

        this.crud = `SELECT ${colunas} FROM ${tabela} WHERE ${colunaNome} = ${item}`;
        this.resultado = conexao.query(this.crud, (error, result) => {
            if (error) {
                console.error("Erro na consulta:", error.message);
            }
            if (result.length === 0) {
                console.log("Nenhum dado cadastrado");
            }
        });
    }

    atualizarBD(tabela, coluna, valor, colunaId, idItem) {
        const conexao = this.conectarBanco();

        this.crud = `UPDATE ${tabela} SET ${coluna} = ${valor} WHERE ${colunaId} = ${idItem}`;
        this.resultado = conexao.query(this.crud, (error, result) => {
            if (error) {
                console.error("Erro na atualização:", error.message);
            }
        });
    }

    editarItens(tabela, valores, colunaId, idItem) {
        const conexao = this.conectarBanco();

        this.crud = `UPDATE ${tabela} SET ${valores} WHERE ${colunaId} = ${idItem}`;
        this.resultado = conexao.query(this.crud, (error, result) => {
            if (error) {
                console.error("Erro na edição:", error.message);
            }
            if (result.affectedRows !== 0) {
                console.log("Item atualizado com sucesso");
            } else {
                console.log("Item não atualizado com sucesso");
            }
        });
    }

    deletarBD(tabela, colunaId, idItem) {
        const conexao = this.conectarBanco();

        this.crud = `DELETE FROM ${tabela} WHERE ${colunaId} = ${idItem}`;
        this.resultado = conexao.query(this.crud, (error, result) => {
            if (error) {
                console.error("Erro na exclusão:", error.message);
            }
            if (result.affectedRows !== 0) {
                console.log("Item excluído com sucesso");
            } else {
                console.log("Item não foi excluído");
            }
        });
    }
}

module.exports = Crud;
