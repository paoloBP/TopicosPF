const express = require("express");
const routes = express.Router();
const controle = require("../controller/AndamentoCont");

routes.route("/andamentos").get(controle.listar);
routes.route("/andamentos").post(controle.incluir);
routes.route("/andamentos").put(controle.alterar);
routes.route("/andamentos/:id").delete(controle.excluir);
routes.route("/andamentos/:id").get(controle.obterPeloId);
routes.route("/andamentos/filtro/:filtro").get(controle.filtrar);

module.exports = routes;
