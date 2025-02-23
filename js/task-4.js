const loginForm = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  email.classList.add("email-input");
  password.classList.add("password-input");

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