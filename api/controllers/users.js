const mongoose = require('mongoose');
const md5 = require('md5');

const User = require("../models/user");

exports.getAllUsers = (req, res, next) => {
    User.find({active: true})
    .select("name user_name email city create_date")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                users: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        user_name: doc.user_name,
                        email: doc.email,
                        city: doc.city,
                        create_date: doc.create_date
                    }
                })
                
            }
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        })
}

exports.createUser = (req, res, next) => {
    try{
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            user_name: req.body.user_name,
            email: req.body.email,
            city: req.body.city,
            password: md5(req.body.password)
        })
        newUser.save()
        const response = {
            messsage: "Usuário criado com sucesso!",
            new_user: newUser,
            status: 201
        }
        res.status(201).json(response)
    }catch(error){
        res.status(500).json({
            error: error,
            messsage: "Erro interno.",
            status: 500
        });
    }
}

exports.deleteUser = (req, res, next) => {
    try{
        User.findOneAndUpdate({_id: req.params.id}, {$set:{active: false}}).exec()
        const response = {
            messsage: "Usuário deletado com sucesso"
        }
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({
            error: error
        });
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({message: "Sucesso ao trazer o usuário", user: user})
    } catch(error){
        res.status(500).json({message: "Erro ao trazer o usuário"})
    }
}
