const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('#login-button');
const submitButton = document.querySelector('#submit-btn');
const agreeInput = document.querySelector('#agreement');

// Validar login
button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Verificar se o checkbox foi marcado
agreeInput.addEventListener('click', () => {
  submitButton.disabled = !agreeInput.checked;
});

// Inserir contador de caracteres para o textbox
const textArea = document.querySelector('#textarea');
const spanCaract = document.querySelector('#counter');
const limit = 500;

textArea.addEventListener('keyup', () => {
  const quantCaract = textArea.value.length;
  const restante = limit - quantCaract;
  spanCaract.innerHTML = restante;
});

// Inserir texto ao enviar o formulário

function getCheckboxValues() {
  // Pegar todos os valores marcados do checkbox
  const subjects = document.querySelectorAll('[name="subject"]:checked');
  let subjectString = ' ';

  // A partir do segundo valor, ele vai inserir uma vírgula
  for (let i = 0; i < subjects.length; i += 1) {
    if (i === 0) {
      subjectString += subjects[i].value;
    } else {
      subjectString += `, ${subjects[i].value}`;
    }
  }

  return subjectString;
}

submitButton.addEventListener('click', () => {
  const form = document.querySelector('#evaluation-form');
  const firstName = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const userEmail = document.querySelector('#input-email').value;
  const select = document.querySelector('#house');
  const house = select.options[select.selectedIndex].text;
  const family = document.querySelector('input[name="family"]:checked').value;
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const comment = document.querySelector('#textarea').value;

  const p = document.createElement('p');
  p.classList.add('information');

  p.innerHTML = `Nome: ${firstName} ${lastName} <br> Email: ${userEmail} <br> Casa: ${house}`;
  p.innerHTML = `${p.innerHTML} <br> Família: ${family} <br> Matérias: ${getCheckboxValues()}`;
  p.innerHTML = `${p.innerHTML} <br> Avaliação: ${rate} <br> Observações: ${comment}`;
  form.appendChild(p);
});
// Projeto Finalizado!
