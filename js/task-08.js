const form = document.querySelector(".login-form");
const inputEmail = form.email;
const inputPassword = form.password;

console.log(inputPassword.value);

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
