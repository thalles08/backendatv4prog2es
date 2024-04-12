import { Router } from "express";
import InscricaoCtrl from "../controle/InscricaoCtrl.js";

const rotaInscricao = new Router();
const inscCtrl = new InscricaoCtrl();

rotaInscricao.get('/', inscCtrl.consultar)
.post('/', inscCtrl.gravar)
.put('/', inscCtrl.atualizar)
.patch('/', inscCtrl.atualizar)
.delete('/', inscCtrl.excluir);

export default rotaInscricao;
