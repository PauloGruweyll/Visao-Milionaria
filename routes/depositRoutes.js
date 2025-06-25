const express = require('express');
const router = express.Router();
const depositController = require('../controllers/depositController');
const authMiddleware = require('../middlewares/authMiddleware');

// Usuário autenticado
router.post('/', authMiddleware, depositController.createDeposit);
router.get('/me', authMiddleware, depositController.getUserDeposits);

// Admin
router.get('/', authMiddleware, depositController.getAllDeposits);
router.put('/:id', authMiddleware, depositController.updateDepositStatus);

module.exports = router;
