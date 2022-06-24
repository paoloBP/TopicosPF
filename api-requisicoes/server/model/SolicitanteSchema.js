const mongoose = require("mongoose");
const SolicitanteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: String,
});
module.exports = mongoose.model("Solicitante", SolicitanteSchema);
