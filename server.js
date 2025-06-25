require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware para permitir CORS (ajuste conforme necessidade)
app.use(cors());

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Middleware para interpretar dados urlencoded (formulários)
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (como imagens, CSS, JS no frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Importar rotas
const uploadRoutes = require('./routes/uploadRoutes');
const authRoutes = require('./routes/authRoutes');

// Usar rotas
app.use('/api', uploadRoutes);
app.use('/auth', authRoutes);

// Rota padrão para teste
app.get('/', (req, res) => {
  res.send('API rodando com sucesso!');
});

// Tratamento básico de erros (exemplo)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Erro interno do servidor' });
});

// Definir porta e iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});