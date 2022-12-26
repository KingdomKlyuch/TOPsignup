document.getElementById("my-form").addEventListener("submit", submitForm);
function submitForm(event) {
 
  event.preventDefault();
  

  var name = document.getElementById("name").value;
  

  var email = document.getElementById("email").value;
  

  console.log("Name: " + name);
  console.log("Email: " + email);

}

// Get the password and confirm password input elements
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Add an event listener to the confirm password input that runs a function
// every time the value changes
confirmPasswordInput.addEventListener('input', function() {
  // If the password and confirm password values don't match, add the error class
  // to both input elements
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordInput.classList.add('error');
    confirmPasswordInput.classList.add('error');
  }
  // If the values match, remove the error class from both input elements
  else {
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');
  }
});
