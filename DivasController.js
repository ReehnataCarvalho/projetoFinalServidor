const divasModel = require('./DivasSchema')

const getAll = async () => {
    return divasModel.find((error, divas) => {
      return divas
    })
  }

  const getById = (id) => {
    return divasModel.findById(id) 
  }

  const add = (divas) => {
    const novaDivas = new divasModel(divas)
    return novaDivas.save()
  }

  const remove = (id) => {
    return divasModel.findByIdAndDelete(id)
  }

  const update = (id, diva) => {
    return divasModel.findByIdAndUpdate(
      id,
      { $set: diva },
      { new: true }, // RETORNAR A Diva JA ATUALIZADA NO CALLBACK
    )
    }

  module.exports = {
    getAll,
    getById,
    add,
    remove,
    update
  }