<?php 
    include_once('../../controller/login/verificarSessao.php');
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/home.css">
    <link rel="stylesheet" href="../css/login.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
    <title>Home</title>
</head>
<body>
        <div class="navbar">
            <div class="header-inner-content">
                <a href="../home.php">
                    <h1 class="logo">Pu<span>zz</span>le</h1>
                </a>
                <a href="../home.php" class="linkHomeMenu">
                    <img src="../img/logo-2.png" alt="logo" class="logoFoto"></a>
                    <nav>
                        <ul>
                            <li><a href="../home.php">HOME</a></li>
                            <li><a href="../view/crud.php">GESTÃO</a></li>
                            <li><a href="../produtos.php">PRODUTOS</a></li>
                            <li><a href="../sobre.php">SOBRE</a></li>
                            <li><a href="../contato.php">CONTATO</a></li>
                            <li><a href="../contato.php" id="conta">CONTA</a></li>
                        </ul>
                    </nav>
                    <div class="nav-icons-container">
                        <img src="./img/menu.png" alt="menu" class="menu-button">
                    </div>
                    
            </div> 
        </div>
        <!-- Slideshow container -->
  <div class="container-slide">
    <div class="slideshow-container">
    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  </div>
  <br>
  <!-- The dots/circles -->
  <div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
  </div>
</div>
<header>
  <div class="header-iner-content">
      <div class="header-botton-side">
          <div class="header-botton-side-left">
            <h1>Comece da maneira que quiser o seu quebra cabeça</h1>
            <p>Comece a montar sua jornada educacional do jeito que preferir. Cada peça é uma descoberta, cada conexão é um avanço. E quando você completar seu quebra-cabeça, exiba sua conquista com orgulho e estilo.</p>
              <button>Ver Agora &#8594;</button>
          </div>
          <div class="header-botton-side-right">
            <img src="../img/svg/collaboration-animate.svg" alt="quebra-cabeça">
          </div>
      </div>
  </div>
</header>
<secction class="cards">
  <div class="container-cards">
    <div class="card">
      <img src="../img/marca-2.png" alt="python-imagem">
      <h1>CSS</h1>
      <p>Python é uma linguagem de programação de alto nível, valorizada por sua simplicidade, legibilidade e vasta biblioteca padrão. Interpretada e multiplataforma, é ideal para iniciantes e profissionais, permitindo o desenvolvimento de uma ampla gama de aplicações, desde scripts simples até projetos complexos. Sua comunidade ativa contribui para sua constante evolução.
      </p>
      <button>VER MAIS &rarr;</button>
    </div>

    <div class="card">
      <img src="../img/marca-2.png" alt="js-imagem">
      <h1>JAVA SCRIPT</h1>
        <div class="texto">
          <p>JavaScript é uma linguagem de programação de alto nível, amplamente utilizada para desenvolvimento web. Ela permite interações dinâmicas em páginas da web, manipulando o conteúdo e o comportamento do navegador do usuário. É uma linguagem interpretada, executada no lado do cliente, e possui uma sintaxe flexível e poderosa.
          </p>
          <button>VER MAIS &rarr;</button>
      </div>
      
    </div>
    <div class="card">
      <img src="../img/marca-2.png" alt="html-imagem">
      <h1>PHP</h1>
      <p>PHP é uma linguagem de script de código aberto, amplamente usada para desenvolvimento web. Integra-se bem ao HTML e pode gerar conteúdo dinâmico. É fácil de aprender e suporta uma ampla gama de bancos de dados, tornando-o uma escolha popular para criar sites dinâmicos e aplicativos da web.
      </p>
      <button>VER MAIS &rarr;</button>
    </div>

    <div class="card">
      <img src="../img/marca-2.png" alt="sql-imagem">
      <h1>SQL</h1>
      <p>SQL (Structured Query Language) é uma linguagem de programação usada para gerenciar e manipular bancos de dados relacionais. Permite a criação, consulta, atualização e exclusão de dados de forma eficiente, facilitando o armazenamento e recuperação de informações em sistemas de gerenciamento de banco de dados como MySQL, PostgreSQL e SQL Server.
      </p>
      <button>VER MAIS &rarr;</button>
    </div>
  </div>
</secction>
<section class="informations-2">
  <div class="information-container">
    
  </div>
</section>
<footer>
  <div class="footer-container">
    <div class="logo-space">
     <center><img src="../img/logo-alt.png" alt="logo alternativa"></center>
      <p>Projetado e construído com todo o amor do mundo pela equipe Pu<span>zz</span>le com a ajuda de nossos colaboradores.</p>
    </div>
    <div class="information">
      <ol>
        <h3>conteudo</h3>
        <li><a href="">Atividades</a></li>
        <li><a href="">Videos</a></li>
        <li><a href="">Conteudo</a></li>
        <li><a href="">Documentacao</a></li>
        <li><a href="">Tags</a></li>
      </ol>

      <ol>
        <h3>Linguagens de programação</h3>
        <li><a href="">JavaScript</a></li>
        <li><a href="">PHP</a></li>
        <li><a href="">SQL</a></li>
        <li><a href="">Python</a></li>
        <li><a href="">C++</a></li>
      </ol>

      <ol>
        <h3>conteudo</h3>
        <li><a href="">Atividades</a></li>
        <li><a href="">Videos</a></li>
        <li><a href="">Conteudo</a></li>
        <li><a href="">Documentacao</a></li>
        <li><a href="">Tags</a></li>
      </ol>

      <ol>
        <h3>Linguagens de programação</h3>
        <li><a href="">JavaScript</a></li>
        <li><a href="">PHP</a></li>
        <li><a href="">SQL</a></li>
        <li><a href="">Python</a></li>
        <li><a href="">C++</a></li>
      </ol>
  </div>
  </div>
  <hr><br>
  <center><p>© Puzzle. Todos os direitos reservados.</p></center>
</footer>
    <script src="../js/home.js"></script>
    <script src="../js/carrosel.js"></script>
    <script src="../js/error404.js"></script>
</body>
</html>
