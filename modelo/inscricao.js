import InscricaoDAO from "../persistencia/inscricaoDAO.js";

export default class Inscricao {

    #id
    #nome
    #dataNascimento
    #cpf
    #endereco
    #telefone
    #email
    #vaga

    constructor(id, nome, dataNascimento, cpf, endereco, telefone, email, vaga) {
        
        this.#id = id;
        this.#nome = nome;
        this.#dataNascimento = dataNascimento;
        this.#cpf = cpf;
        this.#endereco = endereco;
        this.#telefone = telefone;
        this.#email = email;
        this.#vaga = vaga;

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

    get vaga() {
        return this.#vaga;
    }

    set vaga(novaVaga) {
        this.#vaga = novaVaga;
    }

    toJSON() {
        return {
            id: this.id,
            nome: this.#nome,
            dataNascimento: this.#dataNascimento,
            cpf: this.#cpf,
            endereco: this.#endereco,
            telefone: this.#telefone,
            email: this.#email,
            vaga: this.#vaga
        };
    }

    async gravar() {
        const inscDAO = new InscricaoDAO();
        await inscDAO.gravar(this);
    }

    async atualizar() {
        const inscDAO = new InscricaoDAO();
        await inscDAO.atualizar(this);
    }

    async excluir() {
        const inscDAO = new InscricaoDAO();
        await inscDAO.excluir(this);
    }

    async consultar() {
        const inscDAO = new InscricaoDAO();
        return await inscDAO.consultar();
    }
}
