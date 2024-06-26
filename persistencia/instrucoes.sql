CREATE TABLE profissional(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(15) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    dataNascimento VARCHAR(10) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    numeroCompl VARCHAR(50) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL
);

CREATE TABLE funcionario(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    dataNascimento VARCHAR(10) NOT NULL,
    cpf VARCHAR(15) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE inscricao(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    dataNascimento VARCHAR(10) NOT NULL,
    cpf VARCHAR(15) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    vaga VARCHAR(100) NOT NULL
);