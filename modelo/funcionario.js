import FuncionarioDAO from "../persistencia/funcionarioDAO.js";

export default class Funcionario {

    #id
    #nome
    #dataNascimento
    #cpf
    #endereco
    #telefone
    #email

    constructor(id, nome, dataNascimento, cpf, endereco, telefone, email) {
        
        this.#id = id;
        this.#nome = nome;
        this.#dataNascimento = dataNascimento;
        this.#cpf = cpf;
        this.#endereco = endereco;
        this.#telefone = telefone;
        this.#email = email;

    }

    get id () {
        return this.#id;
    }

    set id (novoId) {
        this.#id = novoId;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }

    set dataNascimento(novaDataNascim) {
        this.#dataNascimento = novaDataNascim;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(novoCpf) {
        this.#cpf = novoCpf;
    }

    get endereco () {
        return this.#endereco;
    }

    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    }

    get telefone() {
        return this.#telefone;
    }

    set telefone(novoTelefone) {
        this.#telefone = novoTelefone;
    }

    get email() {
        return this.#email;
    }

    set email(novoEmail) {
        this.#email = novoEmail;
    }

    toJSON() {
        return {
            id: this.id,
            nome: this.#nome,
            dataNascimento: this.#dataNascimento,
            cpf: this.#cpf,
            endereco: this.#endereco,
            telefone: this.#telefone,
            email: this.#email
        };
    }

    async gravar() {
        const funcDAO = new FuncionarioDAO();
        await funcDAO.gravar(this);
    }

    async atualizar() {
        const funcDAO = new FuncionarioDAO();
        await funcDAO.atualizar(this);
    }

    async excluir() {
        const funcDAO = new FuncionarioDAO();
        await funcDAO.excluir(this);
    }

    async consultar() {
        const funcDAO = new FuncionarioDAO();
        return await funcDAO.consultar();
    }
    

}