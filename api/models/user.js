const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    user_name: { type: String, required: true },
    city: { type: String, required: true },
    password: { type: String, required: true },
    create_date: { type: Date, default: () => Date.now(), required: true},
    watched_movies: [{type: mongoose.Schema.ObjectId, ref: 'Movie'}],
    active: { type: Boolean, default: true, required: true},
});

module.exports = mongoose.model('User', userSchema)