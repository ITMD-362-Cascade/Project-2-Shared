document.getElementById("signup_form").onsubmit = function() {
  if (document.getElementById("eAddress").value == "") {
    alert("Signup requires that you at least enter an Email Address.");
	return false;
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}