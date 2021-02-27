const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    image: { type: String, default: '' },
    views: { type: Number, default: 0 },
    likes: { type: Boolean, default: false },
    notes: { type: Number, default: 0 },
    rate: { type: Number, default: 0 },
    description:{ type: String, default: '' },
});

module.exports = mongoose.model('Movie', movieSchema)