const mongoose = require('mongoose');

const Movie = require("../models/movie");

exports.getAllMovies = (req, res, next) => {
    Movie.find()
    .select("title image views likes notes")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                movies: docs.map(doc => {
                    return {
                        title: doc.title,
                        image: doc.image,
                        _id: doc._id,
                        views: doc.views,
                        likes: doc.likes,
                        notes: doc.notes
                    }
                })
            }
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
}

exports.createMovie = (req, res, next) => {
    const movie = new Movie ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        image: req.body.image,
    })
    movie.save().then(result => {
        res.status(200).json({
            message: 'Created movie successfully',
            createdProduct: {
                name: result.name,
                price: result.image,
                _id: result._id,
            }
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: err}); 
    });
}

exports.getMovie = (req, res, next) => {
    const id = req.params.movieId;
    Product.findById(id)
        .select("name image views likes")
        .exec()
        .then(doc => {
            console.log('from database', doc);
            doc ? res.status(200).json(doc) : res.status(404).json({message: 'No valid entry found for provider id'})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        })
}

exports.likeMovie = (req, res, next) => {
    const id = req.params.movieId;
    Movie.updateOne({_id: id}, {$set: req.body})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Movie updated',
            })
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
}