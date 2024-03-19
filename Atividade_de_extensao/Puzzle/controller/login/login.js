import { Conexao } from '../../config/ClassConexao.js';

// Função para verificar se o email e a senha estão presentes e são válidos
const verificarCredenciais = async (email, senha) => {
    try {
        const conexao = new Conexao();
        const db = await conexao.conectarBanco();

        // Consulta SQL para obter os dados do aluno com o email fornecido
        const sql = `SELECT * FROM aluno WHERE email = ?`;
        const [rows, fields] = await db.execute(sql, [email]);

        // Verifica se há um aluno com o email fornecido
        if (rows.length > 0) {
            const dadosAluno = rows[0];
            const senhaHash = dadosAluno.senha;

            // Verifica se a senha fornecida corresponde à senha armazenada
            if (await bcrypt.compare(senha, senhaHash)) {
                return {
                    success: true,
                    idAluno: dadosAluno.idAluno,
                    isAdmin: email === emailAdm
                };
            } else {
                return { success: false, message: "Senha incorreta" };
            }
        } else {
            return { success: false, message: "Email não encontrado" };
        }
    } catch (error) {
        console.error("Erro ao verificar credenciais:", error);
        return { success: false, message: "Erro ao verificar credenciais" };
    }
};

// Manipulador de rota para o login
const loginHandler = async (req, res) => {
    const { email, senha } = req.body;

    // Verifica se o email e a senha foram fornecidos
    if (!email || !senha) {
        return res.status(400).json({ success: false, message: "Email e senha são necessários" });
    }

    // Verifica as credenciais
    const resultado = await verificarCredenciais(email, senha);

    // Redireciona com base no resultado
    if (resultado.success) {
        req.session.email = email;
        req.session.idAluno = resultado.idAluno;
        if (resultado.isAdmin) {
            res.redirect('../../view/crud/');
        } else {
            res.redirect('../../view/');
        }
    } else {
        req.session.destroy();
        res.redirect('../../view/home.html');
    }
};

export default {
    loginHandler
};
