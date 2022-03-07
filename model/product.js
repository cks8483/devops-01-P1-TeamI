const{ObjectId} = require('fastify-mongodb')
const product = require('../routes/product/productapi')

module.exports = {
  readAll: async (mongo) => {
    const collection = mongo.db.collection('product')
    const result = await collection.find({}).toArray()
    return result
  },
  readOne: async (mongo, id) => {
    const collection = mongo.db.collection('product')
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },
  createOne: async (mongo, body) => {
    const collection = mongo.db.collection('product')

    const result = await collection.insertOne(body)
    return result
  },
  deleteOne: async (mongo, id) => {
    const collection = mongo.db.collection('product')

    const result = await collection.findOneAndDelete({
      _id: ObjectId(id)
    })
    return result
  }
}