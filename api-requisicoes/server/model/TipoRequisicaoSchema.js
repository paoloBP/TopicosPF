const mongoose = require("mongoose");
const TipoRequisicaoSchema = new mongoose.Schema({
  descricao: { type: String, required: true, unique: true },
});
module.exports = mongoose.model("TipoRequisicao", TipoRequisicaoSchema);
