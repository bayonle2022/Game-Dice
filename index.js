function All(){
    
var Random =Math.floor( Math.random()*6) +1;


var RandomDiceImage= "dice" + Random +".png";

var RandomImageSource="images/" + RandomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", RandomImageSource);




var Random2 =Math.floor( Math.random()*6) +1;


var RandomDiceImage2= "dice" + Random2 +".png";

var RandomImageSource2="images/" + RandomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", RandomImageSource2);


if(Random > Random2){
    document.querySelector("h1").innerHTML="🚩 Player 1 won";
}
else if (Random2 > Random){
    document.querySelector("h1").innerHTML=" 🚩 Player 2 won ";
}
else {
    document.querySelector("h1").innerHTML="Draw!!!";
}



}