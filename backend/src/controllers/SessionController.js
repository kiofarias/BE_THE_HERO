const connect = require('../database/connection')

module.exports = {
    async session(request,response){
        const {id} = request.body

        const ong = await connect('ongs').where('id', id).select('name').first()

        if (!ong){
            return response.status(400).json({ error: 'no ONG found with this id'})
        }

        return response.json(ong.name)

    }
}