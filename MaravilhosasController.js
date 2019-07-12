const { connect } = require('./DivasApiRepository')
const maravilhosasModel = require('./MaravilhosasSchema')
connect()

  const getAll = async () => {
    return maravilhosasModel.find((error, maravilhosas) => {
      return maravilhosas
    })
  }
  const add = (maravilhosas) => {
    const novaMaravilhosas = new maravilhosasModel(maravilhosas)
    return novaMaravilhosas.save()
  }
  const remove = (id) => {
    return divasModel.findByIdAndDelete(id)
  }

  module.exports = {
    getAll,
    add
  }