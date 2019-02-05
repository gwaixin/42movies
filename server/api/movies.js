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

    movie.save((err, data) => {
        if (err) { return res.json({ status: false, error: err }) }
        res.json({ status: true, data: data })
    })
})

// update a movie here
router.put('/movies', (req, res, next) => {
    let updated = {}

    if (req.body.title) { updated.title = req.body.title }
    if (req.body.summary) { updated.summary = req.body.summary }
    if (req.body.image) { updated.image = req.body.image }
    if (req.body.slug) { updated.slug = req.body.slug }
    if (req.body.ratings) { updated.ratings = req.body.ratings }
    if (req.body.is_featured) { updated.is_featured = req.body.is_featured }
    if (req.body.year) { updated.year = req.body.year }
    if (req.body.cast) { updated.cast = req.body.cast }

    Movie.findOneAndUpdate({ 
        _id: mongoose.Types.ObjectId(req.body.id)
    }, 
    updated,
    (err, movie) => {
        if (err) { return res.json({ status: false, error: err }) }


        // otherwise return success result
        res.json({ status: true })

    })

})

// update a movie by slug
router.put('/movies/:slug', (req, res, next) => {
    let updated = {}

    if (req.body.title) { updated.title = req.body.title }
    if (req.body.summary) { updated.summary = req.body.summary }
    if (req.body.image) { updated.image = req.body.image }
    if (req.body.slug) { updated.slug = req.body.slug }
    if (req.body.ratings) { updated.ratings = req.body.ratings }
    if (req.body.is_featured) { updated.is_featured = req.body.is_featured }
    if (req.body.year) { updated.year = req.body.year }
    if (req.body.cast) { updated.cast = req.body.cast }

    Movie.findOneAndUpdate({ 
        slug: req.params.slug
    }, 
    updated,
    (err, movie) => {
        if (err) { return res.json({ status: false, error: err }) }


        // otherwise return success result
        res.json({ status: true })

    })

})




//
router.delete('/movies/:slug', (req, res, next) => {
    Movie.findOneAndDelete({ slug: req.params.slug }, (err, data) => {

        if (err) { return res.json({ status: false, error: err }) }

        if (data == null) { return res.json({ status: false, message: 'No movie found to delete' }) }
        
        // response success deletion
        res.json({ status: true, error: err, id: req.params, data})
    })
})


module.exports = router