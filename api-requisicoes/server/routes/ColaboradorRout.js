const express = require("express");
const routes = express.Router();
const controle = require("../controller/ColaboradorCont");

routes.route("/colaboradores").get(controle.listar);
routes.route("/colaboradores").post(controle.incluir);
routes.route("/colaboradores").put(controle.alterar);
routes.route("/colaboradores/:id").delete(controle.excluir);
routes.route("/colaboradores/:id").get(controle.obterPeloId);
routes.route("/colaboradores/filtro/:filtro").get(controle.filtrar);

routes.route('/login').post(controle.login);
routes.route('/logout').post(controle.logout);

module.exports = routes;
