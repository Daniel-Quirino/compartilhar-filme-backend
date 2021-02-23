const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/login')

router.post('/', LoginController.validadeUser)

module.exports = router;