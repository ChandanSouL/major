document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
  
    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }
  
    // Additional validation can be added here, such as checking the length of the password, etc.
  
    // Submit the form to the server
    // ...
  
    alert("Sign up successful!");
  });
  