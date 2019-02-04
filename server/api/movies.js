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

    // prepare filter by category/genre
    if (req.query.genre) {
        search.genres = { '_id' : mongoose.Types.ObjectId(req.query.genre) }
    }

    // begin search
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
    let movie = new Movie({
        title: req.body.title,
        summary: req.body.summary,
        image: req.body.image,
        cast: req.body.cast,
        slug: req.body.slug,
        ratings: req.body.ratings,
        is_featured: req.body.is_featured,
        year: req.body.year,
    })

    movie.save(data => {
        res.json({ status: true, data: data })
    }, err => {
        res.json({ status: false, error: err })
    })
})

// update a movie here
router.put('/movies', (req, res, next) => {
    let updated = {}

    if (req.body.title) { updated.title = req.body.title }
    if (req.body.summary) { update.summary = req.body.summary }
    if (req.body.image) { update.image = req.body.image }
    if (req.body.cast) { update.cast = req.body.cast }
    if (req.body.slug) { update.slug = req.body.slug }
    if (req.body.ratings) { update.ratings = req.body.ratings }
    if (req.body.is_featured) { update.is_featured = req.body.is_featured }
    if (req.body.year) { update.year = req.body.year }

    Movie.findOneAndUpdate({ 
        _id: mongoose.Types.ObjectId(req.body.id)
    }, 
    updated,
    (err, movie) => {
        if (err) { return res.json({ status: false, error: err }) }


        // otherwise return success result
        res.json({ status: true, data: movie })

    })

})


//
router.delete('/movies', (req, res, next) => {
    Movie.findByIdAndRemove({ _id: mongoose.Types.ObjectId(req.body.id) }, (err) => {

        if (err) { return res.json({ status: false, error: err }) }


        // response success deletion
        res.json({ status: true, error: err })
    })
})


module.exports = router