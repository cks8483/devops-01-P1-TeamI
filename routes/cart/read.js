'use strict'
const { ObjectId } = require('fastify-mongodb')


module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const cart = this.mongo.db.collection('cart')
    const result = await cart.find({}).toArray()
    reply.send(result)
    }
  )

  fastify.get('/:id', async function (request, reply) {
    const cart = this.mongo.db.collection('cart')
    const result = await cart.findOne({_id: ObjectId(request.params.id)})
    reply.send(result)
  })
}
