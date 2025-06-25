const mongoose = require('mongoose');

const depositSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pendente', 'aprovado', 'rejeitado'], default: 'pendente' },
  comprovativo: { type: String }, // Caminho do comprovativo (upload)
}, { timestamps: true });

module.exports = mongoose.model('Deposit', depositSchema);