'use strict'
const { ObjectId } = require('fastify-mongodb')


module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

    const token = request.headers['authorization']
    const user = finduserbytoken(token)
    console.log(user)
    

    if(user){
      const cart = this.mongo.db.collection('cart')
      const result = await cart.find({
        userID: user.id
      }).toArray()
      reply.send(result)
    }else{
      if(token){
        reply.code(401).send({message:'잘못된 토큰입니다.'})
      }else{
        reply.code(401).send({message:'로그인이 필요합니다.'})
      }
    }
    }
  )

  fastify.get('/:id', async function (request, reply) {
    const cart = this.mongo.db.collection('cart')
    const result = await cart.findOne({_id: ObjectId(request.params.id)})
    reply.send(result)
  })
}

    async function finduserbytoken(token){
      const user = this.mongo.db.collection('user')
      return await user.find(u => u.token === token)
    }