const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registro de usuário
router.post('/register', authController.register);

// Login de usuário
router.post('/login', authController.login);

// Logout (opcional, dependendo da estratégia)
router.post('/logout', authController.logout);

module.exports = router;
