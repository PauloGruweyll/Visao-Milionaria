const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Perfil
router.get('/me', authMiddleware, userController.getProfile);
router.put('/me', authMiddleware, userController.updateProfile);

// Meus depósitos e transações
router.get('/me/deposits', authMiddleware, userController.getMyDeposits);
router.get('/me/transactions', authMiddleware, userController.getMyTransactions);

module.exports = router;

