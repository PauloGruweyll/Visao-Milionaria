const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');

// Protegido e apenas para admin
router.get('/users', authMiddleware, isAdmin, adminController.getAllUsers);
router.put('/promote/:id', authMiddleware, isAdmin, adminController.promoteToAdmin);
router.delete('/delete/:id', authMiddleware, isAdmin, adminController.deleteUser);
router.get('/stats', authMiddleware, isAdmin, adminController.dashboardStats);

module.exports = router;
