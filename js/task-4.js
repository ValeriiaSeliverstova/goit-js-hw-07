const loginForm = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  emailInput.classList.add("email-input");
  passwordInput.classList.add("password-input");

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  loginForm.reset();
}

loginForm.addEventListener("submit", handleSubmit);