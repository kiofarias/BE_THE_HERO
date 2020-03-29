const cryp = require('crypto')

function generateUniqueId(){
    return cryp.randomBytes(4).toString('HEX')
}

module.exports = generateUniqueId