<?php
include_once __DIR__ . '../../model/ClassCrud.php';
include_once __DIR__ . '/conexao.php'; // Incluindo o arquivo com a classe de conexão

$emailAdm = "Puzzle@gmail.com";
$senhaAdm = "0408Kw1234$#@!";

// Criando uma instância da classe de conexão
$conexao = new Conexao();
$con = $conexao->conectarBanco();

// Consultando se o email do administrador já existe na tabela de alunos
$query = "SELECT * FROM aluno WHERE email = ?";
$stmt = $con->prepare($query);
$stmt->bind_param('s', $emailAdm);
$stmt->execute();
$resultado = $stmt->get_result();

// Verificando se o email já existe na tabela
if ($resultado->num_rows < 1) {
    $nome = "Puzzle";
    $senhapass = password_hash($senhaAdm, PASSWORD_DEFAULT);

    // Inserindo novo registro na tabela de alunos
    $query = "INSERT INTO aluno (nome, email, senha) VALUES (?, ?, ?)";
    $stmt = $con->prepare($query);
    $stmt->bind_param('sss', $nome, $emailAdm, $senhapass);
    $stmt->execute();
}

// Fechar conexão
$con->close();
?>
