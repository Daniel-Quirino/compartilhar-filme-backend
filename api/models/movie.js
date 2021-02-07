const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: mongoose.Schema.Types.ObjectId, required: true },
    image: { type: string, default: 1 },
    views: { type: string, default: 0 },
    likes: { type: string, default: 0 },
});

module.exports = mongoose.model('Order', orderSchema)