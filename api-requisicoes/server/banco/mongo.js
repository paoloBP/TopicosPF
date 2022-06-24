const mongoose = require("mongoose");
const uri =
  "mongodb://admin:admin@localhost:27018/baserequisicoes?authSource=baserequisicoes";
mongoose.connect(uri, {});
