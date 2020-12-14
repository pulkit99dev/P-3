const express = require('express');

let router = express.Router();

let homeController = require('../controller/home');

router.get('/', homeController.home);

module.exports = router;