const express = require("express");
const routes = express.Router();
const controle = require("../controller/RequisicaoCont");

routes.route("/requisicoes").get(controle.listar);
routes.route("/requisicoes").post(controle.incluir);
routes.route("/requisicoes").put(controle.alterar);
routes.route("/requisicoes/:id").delete(controle.excluir);
routes.route("/requisicoes/:id").get(controle.obterPeloId);
routes.route("/requisicoes/filtro/:filtro").get(controle.filtrar);

module.exports = routes;
