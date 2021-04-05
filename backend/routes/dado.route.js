const express = require('express');
const app = express();
const dadoRoutes = express.Router();

let Dado = require('../model/Dado');

// api to add dado
dadoRoutes.route('/dado/add').post(function (req, res) {
  let dado = new Dado(req.body);
  dado.save()
  .then(dado => {
    res.status(200).json({'status': 'success','mssg': 'dado added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
  });
});

// api to get dados
dadoRoutes.route('/dado').get(function (req, res) {
  Dado.find(function (err, dados){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','dados': dados});
    }
  });
});

// api to edit dado
dadoRoutes.route('/dado/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Dado.findById(id, function (err, dado){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','dado': dado});
    }
  });
});

// api to update route
dadoRoutes.route('/dado/update/:id').post(function (req, res) {
    Dado.findById(req.params.id, function(err, dado) {
    if (!dado){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        dado.nome = req.body.nome;
        dado.fonte = req.body.fonte;
        dado.tipo = req.body.tipo;
        dado.natureza = req.body.natureza;
        dado.dia = req.body.dia;
        dado.descricao = req.body.descricao;
        dado.local = req.body.local;

        dado.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api for delete
dadoRoutes.route('/dado/delete/:id').get(function (req, res) {
  Dado.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
    }
  });
});

module.exports = dadoRoutes;