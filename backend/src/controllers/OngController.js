const connect = require('../database/connection')
const genUniId = require('../utils/generateUniqueId')

module.exports = {
    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body

        const id = genUniId()

        await connect('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })


        return response.json({ id })
    },

    async index(request, response) {
        const ongs = await connect('ongs').select('*')
    
        return response.json(ongs)
    }
}