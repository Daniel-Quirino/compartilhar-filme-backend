const mongoose = require('mongoose');

const User = require("../models/user");

exports.getAllUsers = (req, res, next) => {
    User.find()
    .select("name user_name age city")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                users: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        user_name: doc.user_name,
                        age: doc.age,
                        city: doc.city
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
