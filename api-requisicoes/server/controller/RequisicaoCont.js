const Requisicao = require("../model/RequisicaoSchema");

module.exports = {
  listar: async (req, res) => {
    Requisicao.find((err, objetos) => {
      err ? res.status(400).send(err) : res.status(200).json(objetos);
    })
      .populate("tipoRequisicao")
      .populate("solicitante")
      .sort({ titulo: 1 }); // -1 decrescente 1 crescente
  },

  incluir: async (req, res) => {
    let obj = new Requisicao(req.body);
    obj.save((err, obj) => {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  alterar: async (req, res) => {
    let obj = new Requisicao(req.body);
    Requisicao.updateOne({ _id: obj._id }, obj, function (err) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  excluir: async (req, res) => {
    Requisicao.deleteOne({ _id: req.params.id }, function (err) {
      err ? res.status(400).send(err) : res.status(200).json("message:ok");
    });
  },

  obterPeloId: (req, res) => {
    Requisicao.findOne({ _id: req.params.id }, function (err, obj) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    })
      .populate("tipoRequisicao")
      .populate("solicitante");
  },

  filtrar: (req, res) => {
    Requisicao.find(
      {
        $or: [
          { titulo: { $regex: req.params.filtro, $options: "i" } },
          { descricao: { $regex: req.params.filtro, $options: "i" } },
          { status: { $regex: req.params.filtro, $options: "i" } },
        ],
      },
      function (err, obj) {
        err ? res.status(400).send(err) : res.status(200).json(obj);
      }
    )
      .populate("tipoRequisicao")
      .populate("solicitante")
      .sort({ titulo: -1 }); // -1 decrescente 1 crescente
  },
};
