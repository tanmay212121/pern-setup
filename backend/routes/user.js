// backend/routes/user.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/:id', userController.getUserById);
router.post('/createUser', userController.createUser);


module.exports = router;
