<?php
// definindo constantes com informações da conexão com o banco
define('HOST', 'localhost');
define('USER', 'root');
define('SENHA', '');
define('DATABASE', 'bd_puzzle');

// criando uma classe de conexão
class Conexao {
    protected $conexao;

    // método construtor que chama o método de conexão com o banco
    public function __construct() {
        $this->conectarBanco();
    }

    // método que faz a conexão com o banco
    function conectarBanco() {
        try {
            $this->conexao = new mysqli(HOST, USER, SENHA, DATABASE);
            return $this->conexao;
        } catch (Exception $e) {
            echo 'ERRO! ' . $e->getMessage();
            die();
        }
    }

    // método para inserção de dados
    public function inserirDados($tabela, $campos, $valores) {
        $query = "INSERT INTO $tabela ($campos) VALUES ($valores)";
        $resultado = $this->conexao->query($query);
        return $resultado;
    }

    // método para consultar dados
    public function consultarDados($tabela, $coluna, $valor) {
        $query = "SELECT * FROM $tabela WHERE $coluna = '$valor'";
        $resultado = $this->conexao->query($query);
        return $resultado;
    }
}

// Exemplo de utilização da classe de conexão e execução de uma consulta
$conexao = new Conexao();

// Definindo email e senha do administrador
$emailAdm = "Puzzle@gmail.com";
$senhaAdm = "0408Kw1234$#@!";

// Consulta se o email do administrador já existe na tabela
$resultado = $conexao->consultarDados('Administradores', 'email', $emailAdm);

// Se não houver resultados, insere um novo registro na tabela de administradores
if ($resultado->num_rows < 1) {
    $nome = "Puzzle";
    $senhapass = password_hash(($senhaAdm), PASSWORD_DEFAULT);
    
    $insercao = $conexao->inserirDados('Administradores', 'nome, email, senha', "'$nome', '$emailAdm', '$senhapass'");
    
    if ($insercao) {
        echo "Novo administrador inserido com sucesso!";
    } else {
        echo "Erro ao inserir novo administrador.";
    }
} else {
    echo "O email do administrador já existe na tabela.";
}

// Fechar conexão
$conexao->conexao->close();
?>
