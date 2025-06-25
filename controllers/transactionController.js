const Transaction = require('../models/Transaction');
const User = require('../models/User');

exports.createTransaction = async (req, res) => {
  try {
    const { type, amount } = req.body;

    const transaction = new Transaction({
      user: req.user.id,
      type,
      amount,
      status: 'completed'
    });

    await transaction.save();
    res.status(201).json({ message: 'Transação registrada', transaction });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar transação' });
  }
};

exports.getUserTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar transações' });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('user', 'name email');
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar todas as transações' });
  }
};
