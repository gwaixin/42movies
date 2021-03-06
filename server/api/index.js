// index routes for apis
// 1. /api/movie / ~
// 2. /api/genre / ~
// 3. /api/seeder

const express = require('express')
const api     = express()

// get routes
const movies   = require('./movies')
const genres   = require('./genres')
const seeder   = require('./seeder')
const cast     = require('./cast')


// [Optional] we could insert middleware here
api.use(movies)
api.use(genres)
api.use(seeder)
api.use(cast)

module.exports = api