var randomNumber1=Math.random();
randomNumber1=(randomNumber1*6)+1;
var randomNumber1=Math.floor(randomNumber1);
console.log(randomNumber1);

var ImageRandom="images/dice"+randomNumber1+".png"

document.querySelector("img").setAttribute("src",ImageRandom)


var randomNumber2=Math.floor(Math.random()*6 +1);
var randomImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);


if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
  document.querySelector("h1").innerHTML="It is a Draw";
}
