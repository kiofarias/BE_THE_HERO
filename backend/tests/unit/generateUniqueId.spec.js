const genUnId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID',()=>{
    it('Should generate unique ID',()=>{
        const id = genUnId()
        expect(id).toHaveLength(8)
    })
})
