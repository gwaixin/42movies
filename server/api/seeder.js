const { Router } = require('express')

const router = Router()
const Movie = require('../models/movie');


// seed movie data
router.get('/seed-movies', (req, res, next) => {


    // checks if seeding is done
    Movie.find({}, (err, data) => {
        if (err) {
            return res.json({status: false, err: err})
        }
        
        // stops seeding
        if (data && data.length > 0) {

            res.json({status: false, message: 'seeding is done', movies: data});
        
    
        // otherwise continue seeding
        } else {

            // get movie data
            const movies = require('../data/movies.json')

            // start inserting by batch movies
            Movie.insertMany(movies, (err, data) => {
                res.json({status: true, message:'success', movies: data});
            })
        }
    })
    
})

router.get('/seed-genres', (req, res, next) => {

})

module.exports = router