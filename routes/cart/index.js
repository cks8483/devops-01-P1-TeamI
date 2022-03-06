'use strict'

const { readOne, readAll } = require('../../model/cart.js')
const user = require('../../model/cart.js')


module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const findresult = await readAll(this.mongo)
    
    console.log(findresult)

    reply.send(findresult)
  })
}
