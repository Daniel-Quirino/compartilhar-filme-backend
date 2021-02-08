const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users')

router.get('/', UserController.getAllUsers)

router.post('/', UserController.createUser)

router.delete('/:id', UserController.deleteUser)

module.exports = router;