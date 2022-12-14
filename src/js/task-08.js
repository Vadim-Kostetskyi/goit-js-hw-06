const form = document.querySelector(".login-form");
const email = form.firstElementChild;
const password = email.nextElementSibling;
const button = form.lastElementChild;
const inputEmail = email.lastElementChild;
const inputPassword = password.lastElementChild;

const sendForm = (event) => {
  event.preventDefault();

  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Введіть логін і пароль");
  } else {
    const formData = {
      mailText: `${email.innerText}: ${inputEmail.value}`,
      passwordText: `${password.innerText}:  ${inputPassword.value}`,
    };
    console.log(formData);
    form.reset();
  }
};

form.addEventListener("submit", sendForm);
