'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = async function (fastify, opts) {

  require('dotenv').config()
  console.log(process.env.MONGODB_PW)

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })


  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}



//fastify
fastify.register(require('fastify-mongodb'), {

  forceClose: true,
  
  url: 'mongodb+srv://yunasung:a10031004!@cluster0.mxtb9.mongodb.net/firstTeamProject'
})