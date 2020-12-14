const express = require('express');

let router = express.Router();

let sigupController = require('../controller/user');

router.get('/sign-up', sigupController.signup);

router.get('/login', sigupController.login);

module.exports = router;