const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/users')

router.get('/', LoginController.validadeUser)

module.exports = router;