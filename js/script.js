var news = document.getElementById("news_text");
var newsNumber = 0;

news.addEventListener('animationiteration', animationFunction);
 
function animationFunction() {
  if (newsNumber == 0){
    news.textContent = ("Austria announces strict lockdown as virus cases soar") ;
	newsNumber++;
  } else if (newsNumber == 1){
    news.textContent = ("New law on 'political Islam' opens door for crackdown on Muslims");	
	newsNumber++;
  } else if (newsNumber == 2){
    news.textContent = ("New Hydrogen train is set to travel on challenging alpine routes") ;
	newsNumber = 0;
  };
};


