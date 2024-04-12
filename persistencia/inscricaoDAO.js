import Inscricao from "../modelo/inscricao.js";
import Conectar from "./conexao.js";

export default class InscricaoDAO {

    async gravar(inscricao) {
        if (inscricao instanceof Inscricao) {
            const conexao = await Conectar();
            const sql = "INSERT INTO inscricao (nome, dataNascimento, cpf, endereco, telefone, email) VALUES (?, ?, ?, ?, ?, ?)";
            const parametros = [inscricao.nome, inscricao.dataNascimento, inscricao.cpf, inscricao.endereco, inscricao.telefone, inscricao.email];
            const resultado = await conexao.query(sql, parametros);
            inscricao.id = resultado[0].insertId;
            global.poolConexoes.releaseConnection(conexao);            
        }
    }

    async atualizar(inscricao) {
        if (inscricao instanceof Inscricao) {
            const conexao = await Conectar();
            const sql = "UPDATE inscricao SET nome = ?, dataNascimento = ?, cpf = ?, endereco = ?, telefone = ?, email = ? WHERE id = ?";
            const parametros = [inscricao.nome, inscricao.dataNascimento, inscricao.cpf, inscricao.endereco, inscricao.telefone, inscricao.email, inscricao.id];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(inscricao) {
        if (inscricao instanceof Inscricao) {
            const conexao = await Conectar();
            const sql = "DELETE FROM inscricao WHERE id = ?";
            const parametros = [inscricao.id];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(inscricao) {
        let listaInscricoes = [];        
        const conexao = await Conectar();
        const sql = "SELECT * FROM inscricao ORDER BY nome";
        const [rows, fields] = await conexao.query(sql);
        for (const registro of rows) {
            const inscricao = new Inscricao(registro.id, registro.nome, registro.dataNascimento, registro.cpf, registro.endereco, registro.telefone, registro.email);
            listaInscricoes.push(inscricao);
        }
        global.poolConexoes.releaseConnection(conexao);
        return listaInscricoes;
    }

}
