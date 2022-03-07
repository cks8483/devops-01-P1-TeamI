'use strict'

const { readAll, readOne, createOne, deleteOne, readByCategory } = require('../../model/product.js')
const product = require('../../model/product.js')

module.exports = async function (fastify, opts) {
   //전체 물건보기, 쿼리
   fastify.get('/', async function(request, reply){
      const product = this.mongo.db.collection('product')
      const category = request.query.category
      console.log(category);

      if(category){
         const result = await product.find({
            product:{category: category}
         }).toArray()
         console.log(result)
         reply.code(200).send(result)
      }
      else{
         const findresult = await readAll(this.mongo) 
         console.log("X") 
         reply.send(findresult)
      }
   })

   
//skip limit

    //물건id로 찾기
    fastify.get('/:id', async function(request, reply){
      const findOneResult = await readOne(this.mongo, request.params.id)
      // console.log("result : ", findOneResult);

       reply.send(findOneResult)
  })

  //조건맞는 물품들 확인
//   fastify.get('?query', async function(request, reply){
//    const product = this.mongo.db.collection('product')
//    const queryResult = await product.find({query}).toArray();
//    console.log("result : ", queryResult);

//     reply.send(queryResult)
// })
   //바디문 넣어서 생성
   fastify.post('/', async function(request, reply){
         const createresult = await createOne(this.mongo, request.body)
         console.log("result : ", createresult);

         reply.send(createresult)
      })
   
   //제품 삭제
   fastify.delete('/:id', async function(request, reply){
      const deleteresult = await deleteOne(this.mongo, request.params.id)
      console.log("result : ", deleteresult);

      reply.send(deleteresult)
   })


   //하드코딩 생성
   //  fastify.post('/', async function(request, reply){
   //    const product = this.mongo.db.collection('product')
      // const createresult = await product.insertOne({
      //    "product":
      //       {"p_name":"안경1",
      //       "catecory":"사각안경",
      //       "price":30000,
      //       "image":"link"}
      // }) 
//       console.log("result : ", createresult);

//        reply.send(createresult)
//   })


}