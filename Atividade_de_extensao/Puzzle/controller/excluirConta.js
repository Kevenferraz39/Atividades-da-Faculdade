import { Crud } from '../model/Classcrud.js';

// Função para excluir um aluno com base no ID
const excluirAluno = async (idAluno) => {
    try {
        const sql = new Crud();

        // Excluir o aluno com o ID fornecido
        await sql.deletarBD('aluno', 'idAluno', idAluno);

        return { success: true };
    } catch (error) {
        console.error('Erro ao excluir aluno:', error);
        return { success: false, message: 'Erro ao excluir aluno' };
    }
};

// Obtendo o ID do aluno da sessão
const idAluno = req.session.idAluno;

if (!idAluno) {
    return res.status(400).json({ success: false, message: 'ID do aluno não encontrado na sessão' });
}

// Excluindo o aluno
const resultado = await excluirAluno(idAluno);
if (resultado.success) {
    res.status(200).json({ success: true, message: 'Aluno excluído com sucesso' });
} else {
    res.status(500).json({ success: false, message: 'Erro ao excluir aluno' });
}
