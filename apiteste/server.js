console.log("server rodando novamente...");

// usar o express
const express = require('express');
const app = express();
app.use(express.json()); // para tratar json

// conexão com mongoBD
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const uri = "mongodb://admin:admin@localhost:27018/teste?authSource=teste ";
MongoClient.connect(uri, (err, client) => {
 if (err)
 return console.log(err);
 db = client.db('teste');
 app.listen(3000, function() { // subir serviço da api na porta 3000
 console.log('API rodando na porta 3000');
 console.log('Testar por http://localhost:3000');
 });
 });

 // prerarar para responder ao GET
app.get('/', (req, res) => {
    res.send('Atendida a requisição GET!!');
   }); 

   // rotas para animais
const animais = require('./animais');
animais(app);

// rotas para colaborador
const colaborador = require('./colaborador');
colaborador(app);




