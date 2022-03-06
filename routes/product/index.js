'use strict'

const { readAll, readOne } = require('../../model/product.js')
const product = require('../../model/product.js')

module.exports = async function (fastify, opts) {
   //전체 물건보기
   fastify.get('/', async function(request, reply){
        const findresult = await readAll(this.mongo) 
        
        console.log("=======result======== ", findresult);

         reply.send(findresult)
    })
    //물건id로 찾기
    fastify.get('/:id', async function(request, reply){
      const findOneResult = await readOne(this.mongo, request.params.id)
      console.log("result : ", findOneResult);

       reply.send(findOneResult)
  })

    fastify.post('/', async function(request, reply){
      const product = this.mongo.db.collection('product')
      const result = await product.insertOne({
         "product":
            {"p_name":"안경1",
            "catecory":"사각안경",
            "price":30000,
            "image":"link"}
      })
      
      console.log("result : ", result);

       reply.send(result)
  })
}