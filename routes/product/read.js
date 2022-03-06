'use strict'


module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const product = this.mongo.db.collection('product')
    const result = await product.find({}).toArray()

    reply.send(result)
    }
  )
}
