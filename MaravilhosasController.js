
const maravilhosasModel = require('./MaravilhosasSchema')

const getAll = async () => {
    return maravilhosasModel.find((error, maravilhosas) => {
      return maravilhosas
    })
  }

  const getById = (id) => {
    return maravilhosasModel.findById(id) 
  }

  const add = (maravilhosas) => {
    const novamaravilhosas = new maravilhosasModel(maravilhosas)
    return novamaravilhosas.save()
  }

  const remove = (id) => {
    return maravilhosasModel.findByIdAndDelete(id)
  }

  const update = (id, maravilhosa) => {
    return maravilhosasModel.findByIdAndUpdate(
      id,
      { $set: maravilhosa },
      { new: true }, // RETORNAR A maravilhosa JA ATUALIZADA NO CALLBACK
    )
    }

  module.exports = {
    getAll,
    getById,
    add,
    remove,
    update
  }