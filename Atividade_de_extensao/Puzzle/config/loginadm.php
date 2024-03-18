<?php 
    include_once __DIR__. '../../model/ClassCrud.php';

    $emailAdm = "Puzzle@gmail.com";
    $senhaAdm = "0408Kw1234$#@!";

    $sql = new Crud();
    $sql->consultarItemId('email', 'aluno', 'email', "'$emailAdm'");
    $resultado = $sql->getResultado();
    
    if (mysqli_num_rows($resultado) < 1) {
        $nome = "Puzzle";
        $senhapass = password_hash(($senhaAdm), PASSWORD_DEFAULT);
        
        $sql->inserirBD('Usuarios', 'nome, email, senha', "'$nome', '$emailAdm', '$senhapass'");
    }
?>