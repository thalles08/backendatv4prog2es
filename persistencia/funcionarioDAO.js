import Funcionario from "../modelo/funcionario.js";
import Conectar from "./conexao.js";

export default class FuncionarioDAO {

    async gravar(funcionario) {
        if (funcionario instanceof Funcionario) {
            const conexao = await Conectar();
            const sql = "INSERT INTO funcionario (nome, dataNascimento, cpf, endereco, telefone, email) VALUES (?, ?, ?, ?, ?, ?)";
            const parametros = [funcionario.nome, funcionario.dataNascimento, funcionario.cpf, funcionario.endereco, funcionario.telefone, funcionario.email];
            const resultado = await conexao.query(sql, parametros);
            funcionario.id = resultado[0].insertId;
            global.poolConexoes.releaseConnection(conexao);            
        }
    }

    async atualizar(funcionario) {
        if (funcionario instanceof Funcionario) {
            const conexao = await Conectar();
            const sql = "UPDATE funcionario SET nome = ?, dataNascimento = ?, cpf = ?, endereco = ?, telefone = ?, email = ? WHERE id = ?";
            const parametros = [funcionario.nome, funcionario.dataNascimento, funcionario.cpf, funcionario.endereco, funcionario.telefone, funcionario.email, funcionario.id];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(funcionario) {
        if (funcionario instanceof Funcionario) {
            const conexao = await Conectar();
            const sql = "DELETE FROM funcionario WHERE id = ?";
            const parametros = [funcionario.id];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(funcionario) {
        let listaFuncionarios = [];        
        const conexao = await Conectar();
        const sql = "SELECT * FROM funcionario ORDER BY nome";
        const [rows, fields] = await conexao.query(sql);
        for (const registro of rows) {
            const funcionario = new Funcionario(registro.id, registro.nome, registro.dataNascimento, registro.cpf, registro.endereco, registro.telefone, registro.email);
            listaFuncionarios.push(funcionario);
        }
        global.poolConexoes.releaseConnection(conexao);
        return listaFuncionarios;
    }

}