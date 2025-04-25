
## Descrição

Este script PHP tem a finalidade de realizar algumas operações relacionadas a um sistema de gerenciamento de usuários. Ele inclui um arquivo de classe `ClassCrud.php`, define um email e uma senha de administrador, consulta um banco de dados em busca de um usuário com o email especificado e, se nenhum usuário for encontrado, insere um novo usuário no banco de dados com as informações fornecidas.

## Uso

Para utilizar este script, siga os seguintes passos:

1. **Inclua o arquivo de classe `ClassCrud.php`**: Este arquivo deve conter a lógica necessária para realizar operações no banco de dados. Certifique-se de que o caminho para o arquivo `ClassCrud.php` esteja correto.

2. **Defina o email e a senha do administrador**: No início do script, defina as variáveis `$emailAdm` e `$senhaAdm` com o email e senha do administrador que serão utilizados para verificar a existência do usuário no banco de dados.

3. **Consulte o banco de dados**: Utilize o objeto `Crud` para consultar o banco de dados em busca de um usuário com o email especificado. 

4. **Verifique o resultado da consulta**: Verifique se o número de linhas retornadas pela consulta é menor que 1. Isso indica que nenhum usuário foi encontrado com o email especificado.

5. **Insira um novo usuário no banco de dados**: Se nenhum usuário for encontrado, utilize o objeto `Crud` para inserir um novo usuário no banco de dados com as informações fornecidas (nome, email e senha).

Exemplo de uso:

```php
<?php 
    include_once __DIR__. '../../model/ClassCrud.php'; // Inclui o arquivo de classe

    $emailAdm = "Puzzle@gmail.com"; // Define o email do administrador
    $senhaAdm = "0408Kw1234$#@!"; // Define a senha do administrador

    $sql = new Crud(); // Instancia a classe Crud
    $sql->consultarItemId('email', 'aluno', 'email', "'$emailAdm'"); // Consulta o banco de dados
    $resultado = $sql->getResultado(); // Obtém o resultado da consulta
    
    if (mysqli_num_rows($resultado) < 1) { // Verifica se nenhum usuário foi encontrado
        $nome = "Puzzle"; // Define o nome do novo usuário
        $senhapass = password_hash(($senhaAdm), PASSWORD_DEFAULT); // Gera o hash da senha
        
        $sql->inserirBD('aluno', 'nome, email, senha', "'$nome', '$emailAdm', '$senhapass'"); // Insere um novo usuário no banco de dados
    }
?>
```

## Observações

- Certifique-se de que as informações de conexão com o banco de dados estejam corretamente configuradas no arquivo `ClassCrud.php`.
- Este script utiliza funções de hash de senha para armazenar senhas de forma segura no banco de dados. Certifique-se de que sua aplicação esteja configurada para utilizar um método seguro de armazenamento e verificação de senhas.
- Antes de utilizar este script em produção, certifique-se de que ele atenda aos requisitos de segurança e privacidade da sua aplicação, como prevenção contra injeção de SQL e proteção adequada das informações dos usuários.
