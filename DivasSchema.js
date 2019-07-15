const mongoose = require("mongoose");
// cada schema equivale collection
const Schema = mongoose.Schema;
const DivasSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String, required: true },
  usuario: { type: String, required: true },
  cpf: { type: Number, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true }
})

// é a nossa coleção de comidas
const divasModel = mongoose.model("divas", DivasSchema);

module.exports = divasModel;
