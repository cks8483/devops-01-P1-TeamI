'use strict'
const { ObjectId } = require('fastify-mongodb')


module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    const cart = this.mongo.db.collection('cart')
    const result = await cart.insertOne(request.body)
    
    reply.code(201)
         .header('Content-Type', 'application/json; charset=utf-8')
         .send({id: request.body._id,
                product_id:request.body.product_id,
                quantity:request.body.quantity})
    }
  )
}
