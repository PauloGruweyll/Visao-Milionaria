const express = require('express');
const router = express.Router();

const upload = require('../middlewares/upload');
const uploadController = require('../controllers/uploadController');

// Rota para upload de arquivo único com campo "file"
router.post('/upload', upload.single('file'), uploadController.uploadFile);

module.exports = router;
