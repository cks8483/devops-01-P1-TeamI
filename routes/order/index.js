'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply
    .code(200)
    .header('content-type', 'application/json')
    .send([
      {
        "id" : "3",
        "user_id" : "2",
        "product_id" : "1",
        "quantity" : "2"
      },
      {
        "id" : "4",
        "user_id" : "2",
        "product_id" : "3",
        "quantity" : "4"
      },
      {
        "id" : "5",
        "user_id" : "2",
        "product_id" : "4",
        "quantity" : "6"
      }
    ])

  })
}
