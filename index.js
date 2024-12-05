var randomDice1 = Math.floor(Math.random() * 6) + 1; // generate random number from 1-6

var diceImage = "images/dice" + randomDice1 + ".png"; // container to generate images base on the random number provided

document.querySelector(".image1").setAttribute("src", diceImage); // sets images randomly from 1-6


var randomDice2 = Math.floor(Math.random() * 6) + 1;

var diceImage2 = "images/dice" + randomDice2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", diceImage2);


if (randomDice1>randomDice2) {
    document.querySelector("h2").innerHTML = "Daog si player 1!"
}
else if (randomDice2>randomDice1) {
    document.querySelector("h2").innerHTML = "Daog si player 2!"
}
else {
    var drawMsg = randomDice1 + randomDice2; // calculate the sum of randomDice1 and randomDice2
    document.querySelector("h2").innerHTML = randomDice1 + " + " + randomDice2 + " = " + drawMsg + " Klaro ana DRAW way daog!";
}