'use strict'

require('dotenv').config()

const path = require('path')
const AutoLoad = require('fastify-autoload')

 module.exports = async function (fastify, opts){
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

  const id = process.env.MONGODB_ID
  const password = process.env.MONGODB_PW

  fastify.register(require('fastify-mongodb'),{
    forceClose: true,

    url : 'mongodb+srv://'+id+':'+password+'@cluster0.msrn7.mongodb.net/project?retryWrites=true&w=majority'
  })
 }
