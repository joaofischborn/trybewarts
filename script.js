const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('#login-button');
const submitButton = document.querySelector('#submit-btn');
const agreeInput = document.querySelector('#agreement');

button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreeInput.addEventListener('click', () => {
  submitButton.disabled = !agreeInput.checked;
});
