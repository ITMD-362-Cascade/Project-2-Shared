document.getElementById("signup_form").onsubmit = function() {
  if (document.getElementById("eAddress").value == "") {
    alert("Signup requires that you at least enter an Email Address.");
	return false;
  }
}