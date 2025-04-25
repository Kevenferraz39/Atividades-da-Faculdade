
## Descrição

Este código PHP consiste em uma classe de conexão com um banco de dados MySQL. Ele define constantes para as informações de conexão (host, usuário, senha e nome do banco de dados) e cria uma classe chamada `Conexao` que encapsula a lógica de conexão com o banco de dados.

## Uso

Para utilizar esta classe de conexão, siga os seguintes passos:

1. **Defina as constantes de conexão**: No início do seu arquivo ou script PHP, defina as constantes `HOST`, `USER`, `SENHA` e `DATABASE` com as informações corretas de conexão ao seu banco de dados MySQL.

2. **Inclua ou copie a classe `Conexao`**: Inclua o código da classe `Conexao` no seu projeto PHP ou copie-o para um arquivo chamado `Conexao.php`.

3. **Instancie a classe `Conexao`**: Em qualquer parte do seu código onde precise de uma conexão com o banco de dados, instancie a classe `Conexao`. Isso irá estabelecer a conexão com o banco de dados automaticamente.

Exemplo de uso:

```php
<?php
    require_once('Conexao.php'); // Inclui a classe de conexão

    // Instancia a classe de conexão
    $conexao = new Conexao();

    // A partir daqui, você pode usar a conexão $conexao para executar consultas ao banco de dados
?>
```

## Observações

- Esta classe utiliza a extensão MySQLi do PHP para conectar-se ao banco de dados. Certifique-se de que esta extensão esteja habilitada no seu ambiente PHP.
- As informações de conexão (host, usuário, senha e nome do banco de dados) são armazenadas como constantes para facilitar a manutenção e reutilização do código. Certifique-se de alterá-las para os valores corretos do seu ambiente.
- Caso ocorra algum erro durante a conexão com o banco de dados, a classe irá capturar a exceção e exibir uma mensagem de erro antes de finalizar o script. Certifique-se de lidar com os erros adequadamente no seu código, seja exibindo mensagens de erro personalizadas ou registrando os erros em logs.
