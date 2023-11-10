let number1 = Math.floor((Math.random() * 6));
let number2 = Math.floor((Math.random() * 6));
let arr = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
document.querySelector(".img1").setAttribute("src",arr[number1]);
document.querySelector(".img2").setAttribute("src",arr[number2]);
if (number1 > number2){
    document.querySelector("h1").innerHTML = "👑Player 1 wins";
}
else if (number1 < number2){
    document.querySelector("h1").innerHTML = "Player 2 wins👑";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}