'use strict'
const { ObjectId } = require('fastify-mongodb')


module.exports = async function (fastify, opts) {
  fastify.delete('/:id', async function (request, reply) {
    const cart = this.mongo.db.collection('cart')
    const result = await cart.findOneAndDelete({_id: ObjectId(request.params.id)})
    
    reply.header('Content-Type', 'application/json; charset=utf-8')
         .send({product_id:request.body.product_id,
                quantity:request.body.quantity})
    }
  )
}

