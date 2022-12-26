document.getElementById("my-form").addEventListener("submit", submitForm);
function submitForm(event) {
 
  event.preventDefault();
  

  let name = document.getElementById("name").value;
  

  let email = document.getElementById("email").value;
  

  console.log("Name: " + name);
  console.log("Email: " + email);

}

