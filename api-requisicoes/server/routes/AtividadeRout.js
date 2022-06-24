const express = require("express");
const routes = express.Router();
const controle = require("../controller/AtividadeCont");

routes.route("/atividades").get(controle.listar);
routes.route("/atividades").post(controle.incluir);
routes.route("/atividades").put(controle.alterar);
routes.route("/atividades/:id").delete(controle.excluir);
routes.route("/atividades/:id").get(controle.obterPeloId);
routes.route("/atividades/filtro/:filtro").get(controle.filtrar);

module.exports = routes;
