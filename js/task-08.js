const form = document.querySelector(".login-form");
const email = form.firstElementChild;
const password = email.nextElementSibling;
const button = form.lastElementChild;
const inputEmail = email.lastElementChild;
const inputPassword = password.lastElementChild;
const mailText = email.innerText;
const passwordText = password.innerText;

const sendForm = (event) => {
  event.preventDefault();

  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Введіть логін і пароль");
  } else {
    const formData = {
      mailText: inputEmail.value,
      passwordText: inputPassword.value,
    };
    console.log(formData);
  }

  form.reset();
};

form.addEventListener("submit", sendForm);
