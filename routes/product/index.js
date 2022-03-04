'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply
    .code(200)
    .header('content-type', 'application/json')
    .send([
      {
        "id" : "1",
        "user_id" : "1",
        "product_id" : "1",
        "quantity" : "4"
    },
      {
         "user_id": "2",
         "product_name": "안경테_2",
         "category" : "사각 안경테",
         "price" : "50000",
         "Image": "https://www.glassmatch.kr/img/product/content/217-855.jpg"
      },
      {
         "user_id": "3",
         "product_name": "안경테_3",
         "category" : "사각 안경테",
         "price" : "70000",
         "Image": "https://www.glassmatch.kr/img/product/content/217-855.jpg"
      }
    ])

  })
}
