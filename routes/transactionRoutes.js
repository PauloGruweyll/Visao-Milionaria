const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middlewares/authMiddleware');

// Usuário autenticado
router.post('/', authMiddleware, transactionController.createTransaction);
router.get('/me', authMiddleware, transactionController.getUserTransactions);

// Admin
router.get('/', authMiddleware, transactionController.getAllTransactions);

module.exports = router;