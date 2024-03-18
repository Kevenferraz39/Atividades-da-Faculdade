<?php 
    session_start();

    include_once('../model/ClassCrud.php');

    $id = $_SESSION['idUsuarios'];

    $sql = new Crud();
    $sql->deletarBD('Usuarios', 'idUsuarios', $id);

?>