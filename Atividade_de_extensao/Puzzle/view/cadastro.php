<?php 
     session_start();
    
     if (isset($_SESSION['email']) and isset($_SESSION['senha'])) {
         header('Location: home.php');
     }
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/Cadastro.css">
    <link rel="stylesheet" href="css/loader.css">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <title>Cadastro de usuarios</title>
</head>
<body>
    <div class="navbar">
        <div class="header-inner-content">
            <a href="home.html">
                <h1 class="logo">Pu<span>zz</span>le</h1>
            </a>
            <a href="home.html" class="linkHomeMenu">
                <img src="img/logo-2.png" alt="logo" class="logoFoto"></a>
            <nav>
            </nav>
            <div class="nav-icons-container">
            </div>
        </div> 
    </div>
    <center>
        <div class="card-cadastrar"><br>
            <form method="post" action="../controller/cadastro/cadastro.php" id="form-cadastro">
                <p class="titulo"><b>Cadastre-se</b></p>
                <label for="">Nome</label><br>
                <input class="fonte" type="text" name="nome" placeholder="Digite o seu nome completo..."
                    required><br><br>
                <label for="">E-Mail</label><br>
                <input class="fonte" type="email" name="email" placeholder="Digite o seu E-mail..." required>
                <br><br>
                <label for="">Senha</label><br>
                <input class="fonte" type="password" name="senha" placeholder="Digite a sua senha..."
                    required><br><br>
                <label for="">Confirmação da senha</label><br>
                <input class="fonte" type="password" name="senhaConf" placeholder="Confirme a sua senha..."
                    required><br><br>
                <input type="submit" value="Cadastrar" id="btn-cadastrar"><br><br>
                <a href="home.php" id="btn-voltar">Cancelar</a>
            </form>
            <div class="loading" id="loading"></div>
    </center>
    <footer>
        <div class="footer-container">
            <div class="logo-space">
                <center><img src="img/logo-alt.png" alt="logo alternativa"></center>
                <p>Projetado e construído com todo o amor do mundo pela equipe Pu<span>zz</span>le com a ajuda de nossos colaboradores.</p>
            </div>
            <div class="information">
                <ol>
                    <h3>conteudo</h3>
                    <li>atividades</li>
                    <li>videos</li>
                    <li>conteudo</li>
                    <li>documentacao</li>
                    <li>tags</li>
                </ol>

                <ol>
                    <h3>Linguagens de programação</h3>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>C++</li>
                </ol>

                <ol>
                    <h3>conteudo</h3>
                    <li>atividades</li>
                    <li>videos</li>
                    <li>conteudo</li>
                    <li>documentacao</li>
                    <li>tags</li>
                </ol>

                <ol>
                    <h3>Linguagens de programação</h3>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>C++</li>
                </ol>
            </div>
        </div>
        <hr><br>
        <center><p>© Puzzle. Todos os direitos reservados.</p></center>
    </footer>
    <script src="js/home.js"></script>
    <script src="js/carrosel.js"></script>
    <script src="js/loadingPage.js"></script>
    <script src="js/verificacao.js"></script>
</body>
</html>
