'use strict'
const { ObjectId } = require('fastify-mongodb')

module.exports = async function (fastify, opts) {
  fastify.get('/:id', async function (request, reply) {
    const product = this.mongo.db.collection('product')
    const result = await product.findOne({_id: ObjectId(request.params.id)})
    
    reply.send(result)
  })

  fastify.get('/', async function (request, reply) {

    const product = this.mongo.db.collection('product')
    
    if(request.query.category){
      const result = await product.find({category:(request.query.category)}).toArray()
      
      reply.send(result)
    }else{
      const result = await product.find({}).toArray()
    reply.send(result)
    }
    }
  )

}
