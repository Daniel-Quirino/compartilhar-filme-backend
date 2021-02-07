const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const MoviesRoutes = require('./api/routes/movies');

mongoose.connect('mongodb+srv://dpq_ufmg_br:H91rqDAOUJtdf9z8@compartilhar-filmes.t7eap.mongodb.net/default?retryWrites=true&w=majority', { useNewUrlParser: true })

mongoose.Promise = global.Promise

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorizatio"
    )
    if (req.method === 'OPTION') {
        res.hasHeader('Acess-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET')
        return res.status(200).json({})
    }
    next();
});

//Routes which should requests
app.use('/movies', MoviesRoutes);

app.use((req, res, next ) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res,next ) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;