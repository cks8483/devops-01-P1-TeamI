const{ObjectId} = require('fastify-mongodb')
const product = require('../routes/user')

module.exports = {
  readAll: async (mongo) => {
    const collection = mongo.db.collection('user')
    const result = await collection.find({}).toArray()
    return result
  },
  readOne: async (mongo, id) => {
    const collection = mongo.db.collection('user')
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  }
}