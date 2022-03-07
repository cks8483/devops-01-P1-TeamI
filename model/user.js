const{ObjectId} = require('fastify-mongodb')
const user = require('../routes/user/userapi')

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
  },
  deleteOne: async (mongo, id) => {
    const collection = mongo.db.collection('user')

    const result = await collection.findOneAndDelete({
      _id: ObjectId(id)
    })
    return result
  }
}