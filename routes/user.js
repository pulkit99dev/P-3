const express = require('express');

let router = express.Router();

let userController = require('../controller/user');

router.get('/sign-up', userController.signup);

router.get('/login', userController.login);

router.post('/create', userController.create);

router.post('/create-session', userController.createSession);

router.get('/profile', userController.profile);

router.get('/sign-out', userController.signout);

module.exports = router;