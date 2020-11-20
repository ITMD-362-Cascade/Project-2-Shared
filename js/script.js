var form = document.getElementById("signup_form");
var email = document.getElementById("eAddress");

form.onsubmit = function() {
  if (email.value == "") {
    alert("Signup requires that you at least enter an Email Address.");
	return false;
  }
}