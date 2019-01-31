const { Router } = require('express')

const router = Router()


// list all movies here
router.get('/movies', (req, res, next) => {
    // TODO here
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