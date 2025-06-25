const User = require('../models/User');
const Deposit = require('../models/deposit');
const Transaction = require('../models/Transaction');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: 'user' }).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
};

exports.promoteToAdmin = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { role: 'admin' }, { new: true });
    res.json({ message: 'Usuário promovido a admin', user });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao promover usuário' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuário removido com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar usuário' });
  }
};

exports.dashboardStats = async (req, res) => {
  try {
    const usersCount = await User.countDocuments({ role: 'user' });
    const totalDeposits = await Deposit.countDocuments();
    const totalTransactions = await Transaction.countDocuments();

    res.json({ usersCount, totalDeposits, totalTransactions });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao carregar estatísticas' });
  }
};