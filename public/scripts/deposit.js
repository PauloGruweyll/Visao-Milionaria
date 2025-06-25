// public/scripts/deposit.js

document.getElementById('depositForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const amount = parseFloat(document.getElementById('amount').value);
  const token = localStorage.getItem('token');

  if (!token) {
    alert('Faça login para continuar.');
    return window.location.href = 'login.html';
  }

  try {
    const response = await fetch('/api/deposit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Depósito realizado com sucesso!');
      document.getElementById('amount').value = '';
    } else {
      alert(data.message || 'Erro ao depositar.');
    }
  } catch (error) {
    console.error('Erro no depósito:', error);
    alert('Erro no servidor.');
  }
});
