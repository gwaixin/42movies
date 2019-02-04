const { Router } = require('express')
const mongoose = require('mongoose')
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

// add a new genre
router.post('/genres', (req, res, next) => {
    let genre = new Genre({ name: req.body.name })
    genre.save((err, data) => {
        if (err) { return res.json({ status: false, error: err }) }

        res.json({ status: true })
    })
})

// updating genre
router.put('/genres', (req, res, next) => {
    Genre.findOneAndUpdate({
        _id: mongoose.Types.ObjectId(req.body.id)
    }, { name: req.body.name },
    (err, data) => {
        if (err) { return res.json({ status: false, error: err }) }

        res.json({ status: true })
    })
})


// removing genres
router.delete('/genres/', (req, res, next) => {
    Genre.findByIdAndRemove({
        _id: mongoose.Types.ObjectId(req.body.id)
    }, (err) => {

        if (err) { return res.json({ status: false, error: err }) }


        // response success deletion
        res.json({ status: true, error: err })
    })
})



module.exports = router