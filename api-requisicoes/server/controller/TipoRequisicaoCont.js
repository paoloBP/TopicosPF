const TipoRequisicao = require("../model/TipoRequisicaoSchema");

module.exports = {
  listar: async (req, res) => {
    TipoRequisicao.find((err, objetos) => {
      err ? res.status(400).send(err) : res.status(200).json(objetos);
    }).sort({ descricao: 1 }); // -1 decrescente 1 crescente
  },

  incluir: async (req, res) => {
    let obj = new TipoRequisicao(req.body);
    obj.save((err, obj) => {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  alterar: async (req, res) => {
    let obj = new TipoRequisicao(req.body);
    TipoRequisicao.updateOne({ _id: obj._id }, obj, function (err) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  excluir: async (req, res) => {
    TipoRequisicao.deleteOne({ _id: req.params.id }, function (err) {
      err ? res.status(400).send(err) : res.status(200).json("message:ok");
    });
  },

  obterPeloId: (req, res) => {
    TipoRequisicao.findOne({ _id: req.params.id }, function (err, obj) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  filtrar: (req, res) => {
    TipoRequisicao.find(
      {
        $or: [{ descricao: { $regex: req.params.filtro, $options: "i" } }],
      },
      function (err, obj) {
        err ? res.status(400).send(err) : res.status(200).json(obj);
      }
    ).sort({ descricao: -1 }); // -1 decrescente 1 crescente
  },
};
