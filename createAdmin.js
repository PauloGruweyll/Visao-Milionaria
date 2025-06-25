const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const path = require('path');

// Carregar variáveis do .env
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Importar modelo do usuário (ajustado para sua estrutura)
const User = require('../models/User'); 

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB conectado...');
  createAdmin();
})
.catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err);
  process.exit(1);
});

async function createAdmin() {
  try {
    const email = 'admin@painel.com';
    const existing = await User.findOne({ email });

    if (existing) {
      console.log('Admin já existe.');
      return process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);

    const admin = new User({
      name: 'Administrador',
      email,
      password: hashedPassword,
      isAdmin: true,
    });

    await admin.save();
    console.log('Administrador criado com sucesso!');
    process.exit(0);} catch (err) {
    console.error('Erro ao criar admin:', err);
    process.exit(1);
  }
}
