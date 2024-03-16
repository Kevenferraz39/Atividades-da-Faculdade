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

