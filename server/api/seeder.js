const { Router } = require('express')

const router = Router()
const Movie = require('../models/movie');
const Genre = require('../models/genre');

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// seed movie data
router.get('/seed-movies', (req, res, next) => {

    // checks if seeding is done
    Movie.find({}, (err, data) => {
        if (err) { return res.json({ status: false, err: err }) }
        
        // stops seeding when
        if (data && data.length > 0) { 

            return res.json({ status: true, message: 'seeding is already done', movie: data })


        // otherwise contine seeding
        } else {

            // get movie data
            const genres = require('../data/genres.json')
            const moviesaved = []

            // start inserting by batch genres
            Genre.insertMany(genres, (err, gresults) => {

                // get movie data
                const movies = require('../data/movies.json')

                // start inserting one by one
                movies.forEach((mov) => {
                    // before inserting we must in-populate genres

                    mov.genres = []
                    // randomize by 5-8 for slicing an array
                    let random = Math.floor(Math.random() * (8 - 5)) + 5
                    // get shuffled first 5-8 genres 
                    let shuffledGenres = shuffle(gresults).slice(0, random)
                    // pushed to genres
                    shuffledGenres.forEach( genre => {
                        mov.genres.push(genre._id)
                    })

                    console.log("[MOVIE][SEED] genres : ", mov.genres)
                    // saved movie
                    Movie.create(mov, () => {
                        console.log("[MOVIE][SEED] movie : " + mov.title)
                    })
                })

                res.json({status: true, message:'success', movies: movies})

            })
        }
    })

})

router.get('/unseed-movies', (req, res, next) => {
    Genre.deleteMany({}).then(() => {
        Movie.deleteMany({}).then(() => {
            res.json({ status: true, message: 'successfully removed data'})
        })
    })
})

module.exports = router