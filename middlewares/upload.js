const multer = require('multer');
const path = require('path');

// Configuração do armazenamento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // pasta onde os arquivos serão salvos
  },
  filename: function (req, file, cb) {
    // Nome do arquivo: timestamp + nome original
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Filtro para aceitar apenas arquivos de imagem
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Apenas imagens são permitidas (jpeg, jpg, png, gif).'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // limite 5MB
  fileFilter
});

module.exports = upload;