const form = document.getElementById("login-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var cp = "12345678";
  var cp2 = "password";
  var pass = document.getElementById("Password").value;
  if (pass == cp || pass == cp2){
    window.location.href = "profile.html";

  }
  else{alert("Incorrect Password");}


  // Redirect to profile page
  
});
