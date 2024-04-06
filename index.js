import express from "express";
import session from 'express-session';
import cors from 'cors';
import rotaProfissional from "./rotas/rotaProfissional.js";
import rotaFuncionario from "./rotas/rotaFuncionario.js"

const host = "0.0.0.0";
const porta = 4000;

const app = express();

app.use(session({
    secret: '4c3ss0',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 10}
}));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(cors());

app.get('/', (requisicao, resposta) => {
    resposta.redirect('/login.html');
});

app.get('/login', (requisicao, resposta) => {
    resposta.redirect('/login.html');
});

//app.post('/login', autenticar);

app.use(express.static('./paginas/publico'));


app.use('/profissional', rotaProfissional);
app.use('/funcionario', rotaFuncionario);

app.listen(porta, host, () => {
    console.log(`Servidor esperando por requisições em http://${host}:${porta}`)
});
