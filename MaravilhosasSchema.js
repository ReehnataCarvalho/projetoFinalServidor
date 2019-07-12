const mongoose = require("mongoose");
// cada schema equivale collection
const Schema = mongoose.Schema;
const MaravilhosasSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true },
  usuario: { type: String, required: true },
  cpf: { type: Number, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  depoimento: [{ type: String }]

})

// é a nossa coleção de comidas
const maravilhosasModel = mongoose.model("maravilhosas", MaravilhosasSchema);

module.exports = maravilhosasModel;

