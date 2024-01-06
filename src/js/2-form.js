const form = document.querySelector('.feedback-form');

const email = form.elements.email;
const message = form.elements.message;

const localStorageKey = 'feedback-form-state';

let parsedSettings = JSON.parse(localStorage.getItem(localStorageKey));

try {
  email.value = parsedSettings.email;
} catch (error) {
  email.value = '';
}

try {
  message.value = parsedSettings.message;
} catch (error) {
  message.value = '';
}

form.addEventListener('input', () => {
  const inputEmail = email.value.trim();
  const inputMessage = message.value.trim();

  localStorage.setItem(
    localStorageKey,
    JSON.stringify({ email: inputEmail, message: inputMessage })
  );
  parsedSettings = JSON.parse(localStorage.getItem(localStorageKey));
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
