const crypto = require('crypto')
const connection = require('../database/connection')
module.exports = {
  async index (request, response) {
    const nogs = await connection('ngos').select('*')
    return response.json(nogs)
  },

  async create (request, response) {
    const { name, email, whatsapp, city, uf } = request.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ngos').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({ id })
  }
}
