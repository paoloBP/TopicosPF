const express = require("express");
const routes = express.Router();
const controle = require("../controller/TipoRequisicaoCont");

routes.route("/tipoRequisicoes").get(controle.listar);
routes.route("/tipoRequisicoes").post(controle.incluir);
routes.route("/tipoRequisicoes").put(controle.alterar);
routes.route("/tipoRequisicoes/:id").delete(controle.excluir);
routes.route("/tipoRequisicoes/:id").get(controle.obterPeloId);
routes.route("/tipoRequisicoes/filtro/:filtro").get(controle.filtrar);

module.exports = routes;
