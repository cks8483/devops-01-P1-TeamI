'use strict'

const { readOne, readAll, createOne, updateOne, deleteOne } = require('../../model/cart.js')
const user = require('../../model/cart.js')


module.exports = async function (fastify, opts) {
  //내장바구니 확인 (/cart?userid 동일아이디 검색)
  fastify.get('/', async function (request, reply) {
    const findresult = await readAll(this.mongo)
    
    console.log(findresult)

    reply.send(findresult)
  })
  //물건구매 (post/) body에 회원아이디, 물건번호, 수량이 들어가야함 *수량을 제외하고는 연동필요
   fastify.post('/', async function (request, reply){
     const createresult = await createOne(this.mongo, request.body)
    
    reply.send({id: request.body.id,
      user_id: request.body.user_id,
      product_id: request.body.product_id,
      quantity : request.body.quantity})
    })

  //물건 수량 변경(update/주문번호) 나머지는 절대값이 되고 바디에 수량만 변경 가능하면 좋음
    fastify.put('/:id', async function (request, reply){
      const updateresult = await updateOne(this.mongo, request.params.id, request.body)

      reply.send({
        _id: request.params.id,
        uid: request.body.uid,
        pid: request.body.pid,
        quantity : request.body.quantity})

    })

}
