'use strict'
const { ObjectId } = require('fastify-mongodb')


module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const product = this.mongo.db.collection('product')
    const result = await product.find({}).toArray()
    reply.send(result)
    }
  )

  fastify.get('/:id', async function (request, reply) {
    const product = this.mongo.db.collection('product')
    const result = await product.findOne({_id: ObjectId(request.params.id)})
    //console.log("*************",result.product.category)   카테고리 이름 가져오는 법 (사각 안경테)
    reply.send(result)
  })

  // fastify.get('/?category', async function (request, reply) {
  //   const product = this.mongo.db.collection('product')
  //   const result = await product.findOne({_id: ObjectId(request.params.category)})
  //   console.log("*************",result.category)

  //   reply.send(result)
  // })

}
