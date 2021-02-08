const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/movies')

router.get('/', MovieController.getAllMovies)

router.post('/',  MovieController.createMovie)

router.put('/like/:movieId', MovieController.likeMovie)

router.get('/:movieId', MovieController.getMovie)


module.exports = router;