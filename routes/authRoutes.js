const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Signup route
router.post('/signup', authController.signUp);

// Login route
router.post('/login', authController.logIn);

module.exports = router;
