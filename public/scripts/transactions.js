// public/scripts/transactions.js

const token = localStorage.getItem('token');

if (!token) {
  alert('Faça login para visualizar suas transações.');
  window.location.href = 'login.html';
}

async function carregarTransacoes() {
  try {
    const response = await fetch('/api/transactions', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      const lista = document.getElementById('transacoes');
      lista.innerHTML = "";

      data.transactions.forEach(tx => {
        const item = document.createElement('li');
        item.textContent = `${tx.date} - ${tx.type} - R$ ${tx.amount}`;
        lista.appendChild(item);
      });
    } else {
      alert(data.message || 'Erro ao carregar transações.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao buscar transações.');
  }
}
