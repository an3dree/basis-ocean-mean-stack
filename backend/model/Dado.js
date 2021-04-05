const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Dado = new Schema({
  nome: {
    type: String
  },
  fonte: {
    type: String
  },
  tipo: {
    type: String
  },
  natureza: {
    type: String
  },
  dia: {
    type: Date
  },
  descricao: {
    type: String
  },
  local: {
    type: String
  }
},{
    collection: 'dado'
});

module.exports = mongoose.model('Dado', Dado);