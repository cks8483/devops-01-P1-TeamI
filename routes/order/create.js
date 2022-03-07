'use strict'
const { ObjectId } = require('fastify-mongodb')


module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    const order = this.mongo.db.collection('order')
    const result = await order.insertOne(request.body)
    
    reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({id: request.body._id,
            item_order_id:request.body.item_order_id})
    }
  )
}