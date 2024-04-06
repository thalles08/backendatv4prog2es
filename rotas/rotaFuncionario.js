import { Router } from "express";
import FuncionarioCtrl from "../controle/FuncionarioCtrl.js";

const rotaFuncionario = new Router();
const funcCtrl = new FuncionarioCtrl();

rotaFuncionario.get('/', funcCtrl.consultar)
.post('/', funcCtrl.gravar)
.put('/', funcCtrl.atualizar)
.patch('/', funcCtrl.atualizar)
.delete('/', funcCtrl.excluir);

export default rotaFuncionario;