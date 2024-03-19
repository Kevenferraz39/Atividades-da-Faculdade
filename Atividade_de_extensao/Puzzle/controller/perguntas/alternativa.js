import { Crud } from '../../model/Classcrud.js';

const submitResposta = async (idExercicio, resposta, idAluno) => {
    try {
        const sql = new Crud();

        // Inserir resposta na tabela 'resposta'
        await sql.inserirBD('resposta', 'resposta, idAluno, idExercicio', `'${resposta}', ${idAluno}, ${idExercicio}`);

        // Consultar a resposta esperada do exercício
        await sql.consultarItem('resposta', 'exercicio', 'idExercicio', idExercicio);
        const resultado = await sql.getResultado();
        const respostaEsperada = resultado.resposta;

        // Comparar a resposta do aluno com a resposta esperada
        if (resposta === respostaEsperada) {
            // Atualizar os pontos do aluno
            await sql.consultarItem('pontos', 'aluno', 'idAluno', idAluno);
            const resultadoPontos = await sql.getResultado();
            let pontos = resultadoPontos.pontos;
            pontos += 10;
            await sql.atualizarBD('aluno', 'pontos', pontos, 'idAluno', idAluno);

            // Redirecionar para a página de resposta correta
            return { success: true, redirect: '../../view/respostaCorreta.php' };
        } else {
            // Redirecionar para a página de resposta incorreta
            return { success: false, redirect: '../../view/respostaIncorreta.php' };
        }
    } catch (error) {
        console.error('Erro ao processar resposta:', error);
        return { success: false, message: 'Erro ao processar resposta' };
    }
};

// Manipulador de rota para enviar a resposta do exercício
const submitRespostaHandler = async (req, res) => {
    const { id, resposta } = req.body;
    const idAluno = req.session.idAluno;

    if (!id || !resposta || !idAluno) {
        return res.status(400).json({ success: false, message: 'ID do exercício, resposta e ID do aluno são necessários' });
    }

    const { success, redirect } = await submitResposta(id, resposta, idAluno);
    if (success) {
        res.redirect(redirect);
    } else {
        res.redirect(redirect);
    }
};

export default {
    submitRespostaHandler
};
