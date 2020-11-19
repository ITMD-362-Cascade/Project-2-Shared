var news = document.getElementById("news_text");
var newsNumber = 0;

news.addEventListener('animationiteration', animationFunction);
 
function animationFunction() {
  if (newsNumber == 0){
    news.textContent = ("Austria announces strict lockdown as virus cases soar") ;
	newsNumber++;
  } else if (newsNumber == 1){
    news.textContent = ("New law on 'political Islam' relating to crackdown on Muslims");	
	newsNumber++;
  } else if (newsNumber == 2){
    news.textContent = ("New Hydrogen train is set to travel on alpine routes") ;
	newsNumber = 0;
  };
};

var form = document.getElementById("signup_form");
var email = document.getElementById("eAddress");

form.onsubmit = function() {
  if (email.value == "") {
    alert("Signup requires that you at least enter an Email Address and name.");
	return false;
  }
}


