const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    user_name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    password: { type: String, required: true },
    create_date: { type: Date, default: () => Date.now(), required: true},
    active: { type: Boolean, default: true, required: true},
});

module.exports = mongoose.model('User', userSchema)