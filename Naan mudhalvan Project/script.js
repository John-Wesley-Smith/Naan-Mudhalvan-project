const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Validation functions
function validateName() {
  const nameError = document.getElementById("nameError");
  if (nameInput.value.trim() === "") {
    nameError.style.display = "block";
    nameInput.classList.add("error");
    return false;
  } else {
    nameError.style.display = "none";
    nameInput.classList.remove("error");
    return true;
  }
}

function validateEmail() {
  const emailError = document.getElementById("emailError");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(emailInput.value.trim())) {
    emailError.style.display = "block";
    emailInput.classList.add("error");
    return false;
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("error");
    return true;
  }
}

function validatePassword() {
  const passwordError = document.getElementById("passwordError");
  const regex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{6,}$/; // min 6 chars, 1 letter, 1 number
  if (!regex.test(passwordInput.value)) {
    passwordError.style.display = "block";
    passwordInput.classList.add("error");
    return false;
  } else {
    passwordError.style.display = "none";
    passwordInput.classList.remove("error");
    return true;
  }
}

// Real-time validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// Form submission
form.addEventListener("submit", function (event) {
  if (!validateName() || !validateEmail() || !validatePassword()) {
    event.preventDefault(); // prevent form submission
    alert("Please fix the errors before submitting.");
  } else {
    alert("Form submitted successfully!");
  }
});
