const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['saque', 'transferência'], required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pendente', 'completo', 'falhou'], default: 'pendente' },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
