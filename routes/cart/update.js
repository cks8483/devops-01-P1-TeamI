'use strict'
const { ObjectId } = require('fastify-mongodb')


module.exports = async function (fastify, opts) {
  fastify.put('/:id', async function (request, reply) {
    const cart = this.mongo.db.collection('cart')
    //const result = await cart.findOneAndUpdate({_id: ObjectId(request.params.id)},{$set: request.body})
    const readResult = await cart.findOne({_id: ObjectId(request.params.id)})
    
    reply.header('content-type', 'application/json')
         .send(readResult)
    }
  )
}
