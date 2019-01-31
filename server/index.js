const express = require('express')
const mongoose = require('mongoose')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000,
    dbschema = process.env.DB_SCHEMA || 'mongodb',
    dbhost = process.env.DB_HOST || 'localhost',
    dbname = process.env.DB_NAME || 'db_42movies'
  } = nuxt.options.server

  // Prepare mongodb
  const db = dbschema + '://' + dbhost + '/' + dbname
  mongoose.connect(db, { useNewUrlParser: true })

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Require API routes
  const api = require('./api')

  app.use('/api', api)



  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
