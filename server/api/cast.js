const { Router } = require('express')
const mongoose = require('mongoose')
const router = Router()
const Movie = require('../models/movie')

router.get('/cast', (req, res, next) => {
	// TODO cast get
})

router.post('/cast', (req, res, next) => {

	let newcast = { name: req.body.actor_name, role: req.body.actor_role }

	Movie.update(
		{ _id: mongoose.Types.ObjectId(req.body.movie_id) },
		{ $push: { cast: newcast } },
		(err, data) => {
			if (err) {
				res.json({ status: false, error: err })
			}

			res.json({ status: true, data: data })

	})
})

router.put('/cast', (req, res, next) => {
	let newcast = { name: req.body.actor_name, role: req.body.actor_role }
	Movie.findOne({ _id: mongoose.Types.ObjectId(req.body.movie_id) }, (err, movie) => {

		if (err) { res.json({ status: false, error: err }) }

		movie.cast[req.body.cast_id] = newcast
		movie.markModified("cast")
		movie.save((err, result) => {

			if (err) { res.json({ status: false, error: err }) }
			else {
				res.json({ status: true, data: result })
			}
		})
	})
})

router.delete('/cast', (req, res, next) => {
	Movie.findOne({ _id: mongoose.Types.ObjectId(req.body.movie_id) }, (err, movie) => {

		if (err) { res.json({ status: false, error: err }) }
		if (movie == null) { res.json({ status: false, message: 'movie not found' }) }

		movie.cast.splice(req.body.cast_id, 1) 
		movie.markModified("cast")
		movie.save((err, result) => {
			if (err) { res.json({ status: false, error: err }) }
			else {
				res.json({ status: true, data: result })
			}
		})
	})
})


module.exports = router