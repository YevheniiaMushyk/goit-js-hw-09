const form = document.querySelector('.feedback-form');

const email = form.elements.email;
const message = form.elements.message;

const localStorageKey = 'feedback-form-state';

let parsedSettings = JSON.parse(localStorage.getItem(localStorageKey));

if (typeof parsedSettings === 'object' && parsedSettings !== null) {
  email.value = parsedSettings.email;
  message.value = parsedSettings.message;
} else {
  email.value = '';
  message.value = '';
}

form.addEventListener('input', () => {
  const inputEmail = email.value.trim();
  const inputMessage = message.value.trim();

  localStorage.setItem(
    localStorageKey,
    JSON.stringify({ email: inputEmail, message: inputMessage })
  );
  parsedSettings.email = inputEmail;
  parsedSettings.message = inputMessage;
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (email.value && message.value) {
    console.log(parsedSettings);
  } else {
    alert('Fill in all fields of the form');
  }

  localStorage.removeItem(localStorageKey);
  email.value = '';
  message.value = '';
  form.reset();
});
