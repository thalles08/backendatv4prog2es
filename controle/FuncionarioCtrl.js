import Funcionario from "../modelo/funcionario.js";

export default class FuncionarioCtrl {
    
    // Método POST do HTTP
    gravar(requisicao, resposta){
        resposta.type('aplication/json'); // responder no formato JSON
        
        if (requisicao.method === 'POST'){
            const dados = requisicao.body;

            const nome = dados.nome;
            const dataNascimento = dados.dataNascimento;
            const cpf = dados.cpf;
            const endereco = dados.endereco;
            const telefone = dados.telefone;
            const email = dados.email;

            if (nome && dataNascimento && cpf && endereco && telefone && email){
                const funcionario = new Funcionario(0, nome, dataNascimento, cpf, endereco, telefone, email);
                funcionario.gravar().then(()=>{
                    resposta.json({
                        status: true,
                        mensagem: "Funcionário gravado com sucesso!",
                        id_funcionario: funcionario.id
                    });
                }).catch((erro)=>{
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível registrar o Funcionário: " + erro.message
                    });
                });
            }
            else {
                resposta.json({
                    status: false,
                    mensagem: "Os campos nome, data de nascimento, cpf, endereço, telefone, e-mail são obrigatórios!"
                })
            }          
        }
        else{
            resposta.json({
                status: false,
                mensagem: "Metodo HTTP inválido! Para gravar um Funcionário, utilize o método POST."
            });
        }
    }

    // Método PUT OU PATCH do HTTP
    atualizar(requisicao, resposta){
        resposta.type('aplication/json'); // responder no formato JSON
        
        if (requisicao.method === 'PUT' || requisicao.method === "PATCH"){
            const dados = requisicao.body;

            const id = dados.id;
            const nome = dados.nome;
            const dataNascimento = dados.dataNascimento;
            const cpf = dados.cpf;
            const endereco = dados.endereco;
            const telefone = dados.telefone;
            const email = dados.email;

            if (nome && dataNascimento && cpf && endereco && telefone && email){
                const funcionario = new Funcionario(id, nome && dataNascimento && cpf && endereco && telefone && email);
                funcionario.atualizar().then(()=>{
                    resposta.json({
                        status: true,
                        mensagem: "Funcionário atualizado com sucesso!",
                        id_funcionario: funcionario.id
                    });
                }).catch((erro)=>{
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível atualizar o Funcionário: " + erro.message
                    });
                });
            }
            else {
                resposta.json({
                    status: false,
                    mensagem: "Os campos id, nome, data de nascimento, cpf, endereço, telefone, e-mail são obrigatórios!"
                })
            }          
        }
        else{
            resposta.json({
                status: false,
                mensagem: "Metodo HTTP inválido! Para atualizar um Funcionário, utilize o método PUT ou PATCH."
            });
        }
    }

    // Método DELETE do HTTP
    excluir(requisicao, resposta){
        resposta.type('aplication/json'); // responder no formato JSON
        
        if (requisicao.method === 'DELETE'){
            const dados = requisicao.body;

            const id = dados.id;
            
            if (id){
                const funcionario = new Funcionario(id);
                funcionario.excluir().then(()=>{
                    resposta.json({
                        status: true,
                        mensagem: "Funcionário excluído com sucesso!",                        
                    });
                }).catch((erro)=>{
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível excluir o Funcionário: " + erro.message
                    });
                });
            }
            else {
                resposta.json({
                    status: false,
                    mensagem: "O campo id é obrigatório!"
                })
            }          
        }
        else{
            resposta.json({
                status: false,
                mensagem: "Metodo HTTP inválido! Para excluir um Funcionário, utilize o método DELETE."
            });
        }
    }

    // Método GET do HTTP
    consultar(requisicao, resposta){
        resposta.type('aplication/json'); // responder no formato JSON
        
        if (requisicao.method === 'GET'){
            const funcionario = new Funcionario(0);
            funcionario.consultar().then((listaFuncionarios)=>{
                resposta.json(listaFuncionarios);
            }).catch((erro)=>{
                resposta.json({
                    status: false,
                    mensagem: "Não foi possível obter o Funcionário: " + erro.message
                });
            });
        }        
        else{
            resposta.json({
                status: false,
                mensagem: "Metodo HTTP inválido! Para consultar um Funcionário, utilize o método GET."
            });
        }
    }
}