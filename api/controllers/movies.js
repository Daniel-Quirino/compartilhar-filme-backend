const mongoose = require('mongoose');
const { validateLike, validateRate } = require('../../helpers/movie')

const Movie = require("../models/movie");

exports.getAllMovies = (req, res, next) => {
    Movie.find()
    .select("title image views likes notes rate")
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
                        notes: doc.notes,
                        rate: doc.rate,
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
                rate: result.rate,
                _id: result._id,
                description: result.description,
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
    Movie.findById(id)
        .select("title image views likes notes rate description")
        .exec()
        .then(doc => {
            doc ? res.status(200).json({movie:doc}) : res.status(404).json({message: 'No valid entry found for provider id'})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        })
}

exports.likeMovie = (req, res, next) => {
    const id = req.params.movieId;

    if(!validateLike(req.body.likes)) {
        return res.status(422).json({
            message: 'O valor passado para o parâmetro likes está inválido - valor deve ser um booleano - true ou false',
            payload: req.body
        })
    }

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

exports.rateMovie = (req, res, next) => {
    const id = req.params.movieId;

    if(!validateRate(req.body.rate)) {
        return res.status(422).json({
            message: 'O valor passado para o parâmetro rate está inválido - valor deve ser um número inteiro de 1 - 5',
            payload: req.body
        })
    }
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