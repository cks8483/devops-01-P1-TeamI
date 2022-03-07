'use strict'
const { ObjectId } = require('fastify-mongodb')
const { readAll, readOne, createOne, updateOne, deleteOne} = require('../../model/cart.js')

// function findUserByToken(token){
//   return findUserByToken.find(u => u.token === token)
// }

module.exports = async function (fastify, opts) {

// const token = request.headers['authorization']
// const user = findUserByToken(token)
// console.log(user)

// if(user){
//   //사람을 찾으면 그 사람의 장바구니 아이템만 가져온다
//   const cart = this.mongo.db.collection('cart')
//   const request = await cart.find(
//     // userID : user.id

//   ).toArray()

//   reply
//   .code(200)
//   .send(result)

// }
// else{
//   //로그인하라고 알려준다
//   if(token){
//     //1. 토큰이 있는데 사람을 못 찾은 경우
//     reply.code(401).send
//   } else {
//     //2. 토근을 안 넘긴 경우
//     reply.code(401).send

//   }
// }

fastify.get('/', async function (request, reply) {
    const result = await readAll(this.mongo)

    // if(request.query.category){
    //   const result = await product.find({prod})
    // }

    console.log("ggggggggg",result)
    reply
    .send(result)
  })

  fastify.get('/:id', async function (request, reply) {
    const collection = this.mongo.db.collection('cart')

    // const itemId = Number(request.query.intemId)

    const result = await readOne(this.mongo, request.params.id)({
    })
    reply
    .send(result)
  })

  fastify.post('/', async function (request, reply) {
    const collection = this.mongo.db.collection('cart')
    const result = await createOne(this.mongo, request.body)

    reply
    .send(result)
  })

  fastify.put('/:id', async function (request, reply) {
    const collection = this.mongo.db.collection('cart')
    const result = await updateOne(this.mongo, request.params.id, request.body)
    reply
    .send(result)
  })

  fastify.delete('/:id', async function (request, reply) {
    const collection = this.mongo.db.collection('cart')
    const dresult = await deleteOne(this.mongo, request.params.id)
    console.log("@@@@@@", dresult)
    reply
    .send(dresult)
  })
}
