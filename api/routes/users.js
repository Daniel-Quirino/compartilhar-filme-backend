const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/users')

router.get('/', MovieController.getAllUsers)


module.exports = router;