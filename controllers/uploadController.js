const path = require('path');

exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Nenhum arquivo enviado.' });
  }// Retorna o caminho do arquivo enviado
  const filePath = path.join('/uploads', req.file.filename);
  res.status(200).json({ message: 'Arquivo enviado com sucesso!', filePath });
};
