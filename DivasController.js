const { connect } = require('./DivasApiRepository')
const divasModel = require('./DivasSchema')
connect()

const getAll = async () => {
    return divasModel.find((error, divas) => {
      return divas
    })
  }
  const add = (divas) => {
    const novaDivas = new divasModel(divas)
    return novaDivas.save()
  }

  module.exports = {
    getAll,
    add
  }