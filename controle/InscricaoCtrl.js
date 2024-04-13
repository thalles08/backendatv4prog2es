import Inscricao from "../modelo/inscricao.js";

export default class InscricaoCtrl {
    
    // Método POST do HTTP
    gravar(requisicao, resposta){
        resposta.type('application/json'); // responder no formato JSON
        
        if (requisicao.method === 'POST'){
            const dados = requisicao.body;

            const nome = dados.nome;
            const dataNascimento = dados.dataNascimento;
            const cpf = dados.cpf;
            const endereco = dados.endereco;
            const telefone = dados.telefone;
            const email = dados.email;
            const vaga = dados.vaga;

            if (nome && dataNascimento && cpf && endereco && telefone && email && vaga){
                const inscricao = new Inscricao(0, nome, dataNascimento, cpf, endereco, telefone, email, vaga);
                inscricao.gravar().then(()=>{
                    resposta.json({
                        status: true,
                        mensagem: "Inscrição gravada com sucesso!",
                        id_inscricao: inscricao.id
                    });
                }).catch((erro)=>{
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível registrar a Inscrição: " + erro.message
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
                mensagem: "Método HTTP inválido! Para gravar uma Inscrição, utilize o método POST."
            });
        }
    }

    // Método PUT OU PATCH do HTTP
    atualizar(requisicao, resposta){
        resposta.type('application/json'); // responder no formato JSON
        
        if (requisicao.method === 'PUT' || requisicao.method === "PATCH"){
            const dados = requisicao.body;

            const id = dados.id;
            const nome = dados.nome;
            const dataNascimento = dados.dataNascimento;
            const cpf = dados.cpf;
            const endereco = dados.endereco;
            const telefone = dados.telefone;
            const email = dados.email;
            const vaga = dados.vaga;

            if (nome && dataNascimento && cpf && endereco && telefone && email && vaga){
                const inscricao = new Inscricao(id, nome, dataNascimento, cpf, endereco, telefone, email, vaga);
                inscricao.atualizar().then(()=>{
                    resposta.json({
                        status: true,
                        mensagem: "Inscrição atualizada com sucesso!",
                        id_inscricao: inscricao.id
                    });
                }).catch((erro)=>{
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível atualizar a Inscrição: " + erro.message
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
                mensagem: "Método HTTP inválido! Para atualizar uma Inscrição, utilize o método PUT ou PATCH."
            });
        }
    }

    // Método DELETE do HTTP
    excluir(requisicao, resposta){
        resposta.type('application/json'); // responder no formato JSON
        
        if (requisicao.method === 'DELETE'){
            const dados = requisicao.body;
            const cpf = dados.cpf;
            const vaga = dados.vaga;
            
            if (cpf && vaga){
                const inscricao = new Inscricao(cpf, vaga);
                inscricao.excluir().then(()=>{
                    resposta.json({
                        status: true,
                        mensagem: "Inscrição excluída!",                        
                    });
                }).catch((erro)=>{
                    resposta.json({
                        status: false,
                        mensagem: "Não foi possível excluir a Inscrição: " + erro.message
                    });
                });
            }
            else {
                resposta.json({
                    status: false,
                    mensagem: "Os campos CPF e Vaga são obrigatórios!"
                })
            }          
        }
        else{
            resposta.json({
                status: false,
                mensagem: "Método HTTP inválido! Para excluir uma Inscrição, utilize o método DELETE."
            });
        }
    }

    // Método GET do HTTP
    consultar(requisicao, resposta){
        resposta.type('application/json'); // responder no formato JSON
        
        if (requisicao.method === 'GET'){
            const inscricao = new Inscricao(0);
            inscricao.consultar().then((listaInscricoes)=>{
                resposta.json(listaInscricoes);
            }).catch((erro)=>{
                resposta.json({
                    status: false,
                    mensagem: "Não foi possível obter a Inscrição: " + erro.message
                });
            });
        }        
        else{
            resposta.json({
                status: false,
                mensagem: "Método HTTP inválido! Para consultar uma Inscrição, utilize o método GET."
            });
        }
    }
}
