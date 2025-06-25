const User = require('../models/User');
const Deposit = require('../models/deposit');
const Transaction = require('../models/Transaction');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao carregar perfil' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true }
    ).select('-password');

    res.json({ message: 'Perfil atualizado', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar perfil' });
  }
};

exports.getMyDeposits = async (req, res) => {
  try {
    const deposits = await Deposit.find({ user: req.user.id });
    res.json(deposits);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar depósitos' });
  }
};

exports.getMyTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    res.json(transactions);} catch (error) {
    res.status(500).json({ message: 'Erro ao buscar transações' });
  }
};