'use strict'
const { ObjectId } = require('fastify-mongodb')
const { readAll, readOne, createOne, updateOne, deleteOne} = require('../../model/product.js')

module.exports = async function (fastify, opts) {

fastify.get('/', async function (request, reply) {
  const collection = this.mongo.db.collection('product')

    const result = await readAll(this.mongo)


    console.log("+++++++",result)

  
    reply
    .send(result)
  })

  fastify.get('/:id', async function (request, reply) {
    const collection = this.mongo.db.collection('product')

    // const itemId = Number(request.query.intemId)

    const result = await readOne(this.mongo, request.params.id)({
    })
    reply
    .send(result)
  })

  fastify.post('/', async function (request, reply) {
    const collection = this.mongo.db.collection('product')
    const result = await createOne(this.mongo, request.body)

    reply
    .send(result)
  })

  fastify.put('/:id', async function (request, reply) {
    const collection = this.mongo.db.collection('product')
    const result = await updateOne(this.mongo, request.params.id, request.body)
    reply
    .send(result)
  })

  fastify.delete('/:id', async function (request, reply) {
    const collection = this.mongo.db.collection('product')
    const dresult = await deleteOne(this.mongo, request.params.id)
    console.log("@@@@@@", dresult)
    reply
    .send(dresult)
  })
}
