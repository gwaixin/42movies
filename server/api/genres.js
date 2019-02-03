const { Router } = require('express')
const router = Router()
const Genre = require('../models/genre')

// TODO restful

// list all genres here
router.get('/genres', (req, res, next) => {
    Genre.find({}, (err, data) => {
      if (err)
        res.json({ status: false, error: err })
      else
        res.json({ status: true, data: data })
    })
    
})

// add a new movie
router.post('/genres', (req, res, next) => {
    // TODO here
})

// view a movie here
router.get('/genres', (req, res, next) => {
    // TODO here
})

// update a movie here
router.put('/genres', (req, res, next) => {
    // TODO here
})


//
router.delete('/genres/', (req, res, next) => {
    // TODO here
})



module.exports = router