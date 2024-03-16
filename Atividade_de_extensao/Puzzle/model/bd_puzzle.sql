CREATE DATABASE bd_puzzle;
USE bd_puzzle;

--  Criação da tabela para usuários administradores
CREATE TABLE Administradores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100)
);

-- Criação da tabela para usuários com acesso aos exercícios
CREATE TABLE Usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100)
);

-- Criação da tabela para os exercícios
CREATE TABLE Exercicios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    descricao TEXT
);

-- Criação da tabela para o progresso dos usuários nos exercícios
CREATE TABLE Progresso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_exercicio INT,
    data_conclusao DATE,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    FOREIGN KEY (id_exercicio) REFERENCES Exercicios(id)
);

-- inserindo dados

INSERT INTO Administradores (nome, email, senha) VALUES ('Keven Ferraz de Almeida ', 'kevenferraz39@gmail.com', '0408Kw12!');

INSERT INTO Usuarios (nome, email, senha) VALUES ('Joao Pedro Silva', 'jp.silva@gmail.com', 'jp456');

INSERT INTO Exercicios (nome, descricao) VALUES ('Função', 'Crie uma função em js.');

INSERT INTO Progresso (id_usuario, id_exercicio, data_conclusao) VALUES (1, 1, CURDATE());
-- Nesse exemplo, o usuário com ID 1 concluiu o exercício com ID 1 na data atual.

SELECT * FROM Administradores;

SELECT * FROM Usuarios;

SELECT * FROM Exercicios;

SELECT * FROM Progresso WHERE id_usuario = 1;
-- Isso selecionará o progresso do usuário com ID 1.
