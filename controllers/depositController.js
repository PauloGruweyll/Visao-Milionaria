import Deposit, { find, findByIdAndUpdate } from '../models/deposit';
import User from '../models/User';

export async function createDeposit(req, res) {
  try {
    const { amount, method } = req.body;

    const deposit = new Deposit({
      user: req.user.id,
      amount,
      method,
    });

    await deposit.save();

    res.status(201).json({ message: 'Depósito solicitado com sucesso', deposit });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao processar o depósito' });
  }
}

export async function getUserDeposits(req, res) {
  try {
    const deposits = await find({ user: req.user.id });
    res.json(deposits);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar depósitos' });
  }
}

export async function getAllDeposits(req, res) {
  try {
    const deposits = await find().populate('user', 'name email');
    res.json(deposits);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar todos os depósitos' });
  }
}

export async function updateDepositStatus(req, res) {
  try {
    const { status } = req.body;
    const { id } = req.params;const deposit = await findByIdAndUpdate(id, { status }, { new: true });
    res.json({ message: 'Status atualizado', deposit });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar status do depósito' });
  }
}