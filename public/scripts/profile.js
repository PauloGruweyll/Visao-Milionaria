// public/scripts/profile.js

const token = localStorage.getItem('token');
const userData = JSON.parse(localStorage.getItem('user'));

if (!token || !userData) {
  alert('Você precisa estar logado.');
  window.location.href = 'login.html';
}

document.getElementById('userName').textContent = userData.name;
document.getElementById('userEmail').textContent = userData.email;
