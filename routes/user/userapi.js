'use strict'

const { readOne, deleteOne } = require('../../model/user.js')
const user = require('../../model/user.js')

module.exports = async function (fastify, opts) {
   //전체 유저 보기
    fastify.get('/', async function(request, reply){
        const user = this.mongo.db.collection('user')
        const findresult = await user.find({}).toArray()
        
        console.log("result : ", findresult);

         reply.send(findresult)
    })
    //아이디로 특정 유저 찾기
    fastify.get('/:id', async function(request, reply){
       const findOneresult =await readOne(this.mongo, request.params.id)
       console.log(findOneresult)
       reply.send(findOneresult)
    })
    //유저 생성
    fastify.post('/', async function(request, reply){
      const user = this.mongo.db.collection('user')
      const result = await user.insertOne({
         "uname":"최찬"
      })
      console.log("result : ", result)
      reply.send(result)
  })
  //유저 삭제
  fastify.delete('/', async function(request, reply){
   const deleteresult = await deleteOne(this.mongo, request.params.id)
   console.log("result : ", deleteresult)
   reply.send(deleteresult)
   })
}
