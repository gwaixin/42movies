const { Router } = require('express')
const mongoose = require('mongoose')
const router = Router()

const Movie = require('../models/movie')
const Genre = require('../models/genre')


// list all movies here
router.get('/movies', (req, res, next) => {

    // prepare search
    var search = {}
    if (req.query.search) {
        search.title = new RegExp(req.query.search, "i")
    }

    if (req.query.genre) {
        search.genres = { '_id' : mongoose.Types.ObjectId(req.query.genre) }
    }

    // TODO here
    Movie.find(search)
        .populate('genres')
        .exec((err, data) => {

          if (err)
              res.json({ status: false, error: err })


          else
              res.json({ status: true, data: data })

        })
})

// fetch movie by slug
router.get('/movies/:slug', (req, res, next) => {
    Movie.findOne({ slug: req.params.slug })
        .populate('genres')
        .exec((err, data) => {

            if (err)
                res.json({ status: false, error: err })

            else
                res.json({ status: true, data: data })
        })
})

// add a new movie
router.post('/movies', (req, res, next) => {
    // TODO here
})

// view a movie here
router.get('/movies', (req, res, next) => {
    // TODO here
})

// update a movie here
router.put('/movies', (req, res, next) => {
    // TODO here
})


//
router.delete('/movies/', (req, res, next) => {
    // TODO here
})



/* Get specific chapter TESTING PURPOSE ONLY */
router.get('/movie/test', (req, res, next) => {

    res.json({result: 'success', message: 'just for testing this'})
})


module.exports = router