# README

Este é um script SQL para criar um banco de dados que gerencia um sistema de exercícios. O banco de dados é nomeado como `bd_puzzle`. Abaixo estão as principais tabelas criadas e suas respectivas estruturas:

## Tabela `Administradores`
Esta tabela armazena informações sobre os usuários administradores do sistema.

- `id`: Identificador único do administrador (chave primária).
- `nome`: Nome do administrador (até 100 caracteres).
- `email`: Endereço de e-mail do administrador (único, até 100 caracteres).
- `senha`: Senha do administrador (até 100 caracteres).

## Tabela `Usuarios`
Esta tabela armazena informações sobre os usuários com acesso aos exercícios.

- `id`: Identificador único do usuário (chave primária).
- `nome`: Nome do usuário (até 100 caracteres).
- `email`: Endereço de e-mail do usuário (único, até 100 caracteres).
- `senha`: Senha do usuário (até 100 caracteres).

## Tabela `Exercicios`
Esta tabela armazena informações sobre os exercícios disponíveis no sistema.

- `id`: Identificador único do exercício (chave primária).
- `nome`: Nome do exercício (até 100 caracteres).
- `descricao`: Descrição detalhada do exercício (texto).

## Tabela `Progresso`
Esta tabela armazena o progresso dos usuários nos exercícios.

- `id`: Identificador único do registro de progresso (chave primária).
- `id_usuario`: Chave estrangeira que referencia o usuário que realizou o exercício.
- `id_exercicio`: Chave estrangeira que referencia o exercício realizado.
- `data_conclusao`: Data em que o exercício foi concluído.
  
As tabelas `Progresso` possuem relacionamentos com as tabelas `Usuarios` e `Exercicios`, garantindo a integridade referencial dos dados.

Este script SQL pode ser utilizado para criar o esquema de banco de dados necessário para implementar um sistema de gerenciamento de exercícios com suporte para administradores e usuários.