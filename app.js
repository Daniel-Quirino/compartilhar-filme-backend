const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const MoviesRoutes = require('./api/routes/movies');
const UsersRoutes = require('./api/routes/users');
const LoginRoutes = require('./api/routes/login');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

mongoose.Promise = global.Promise

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var cors = require('cors')

app.use(cors())

//Routes which should requests
app.use('/api/v1/movies', MoviesRoutes);
app.use('/api/v1/users', UsersRoutes)
app.use('/api/v1/login', LoginRoutes)

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