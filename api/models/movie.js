const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: mongoose.Schema.Types.ObjectId, required: true },
    image: { type: String, default: '' },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Movie', movieSchema)