'use strict'
const { readAll, readOne, createOne, deleteOne } = require('../../model/order.js')

module.exports = async function (fastify, opts) {
  
   fastify.get('/', async function(request, reply){
       const findresult = await readAll(this.mongo)
       console.log("result : ", findresult);

        reply.send(findresult)
   })
   //
   fastify.get('/:id', async function(request, reply){
      const findOneresult =await readOne(this.mongo, request.params.id)
      console.log(findOneresult)
      reply.send(findOneresult)
   })
   //
   fastify.post('/', async function(request, reply){
     const result = await createOne(this.mongo, request.body)
     console.log("result : ", result)
     reply
          .code(201)
          .header('Content-Type', 'application/json; charset=utf-8')
          .send({id: request.body._id,
                  item_order_id: request.body.item_order_id})
          }
         )
 //유저 삭제
 fastify.delete('/', async function(request, reply){
  const deleteresult = await deleteOne(this.mongo, request.params.id)
  console.log("result : ", deleteresult)
  reply.send(deleteresult)
  })
}