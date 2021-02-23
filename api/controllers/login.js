const mongoose = require('mongoose');
const md5 = require('md5');

const User = require("../models/user");

exports.validadeUser = async (req, res, next) => {
    try{
        const user = await User.find({ $and: [ {email: req.body.email}, {password: md5(req.body.password)} ] })
        if(user.length == 0){
            res.status(404).json({message: "Usuário ou Senha incorretas", status: 404})
        }else{
            res.status(200).json({message: "Login realizado com sucesso", user: user, status: 200})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message: "Erro interno", status: 500})
    }
}

