//Declare variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var answer = letters[Math.floor(Math.random() * letters.length)];
var wins = 0;
var losses = 0;
var lives = 10;
var wrongArray = [];

//Log the answer to the console
console.log(answer);
 
//Function for showing lives left
function startGame() {
    document.getElementById("livesLeft").innerHTML = "Lives Left: " + lives;
    document.getElementById("wrongs").innerHTML = "Letters Used: " + wrongArray.join(", ");
    document.getElementById("winning").innerHTML = "You've won " + wins + " times";
    document.getElementById("losing").innerHTML = "You've lost " + losses + " times";
}

//Function to reset the game
function reset() {
    lives = 10;
    wrongArray = [];
    answer = letters[Math.floor(Math.random() * letters.length)];
    console.log(answer);
}

//On key up funtion to begin the game
document.onkeyup = function(event) {
    document.getElementById("hide").style.display = "none";
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    wrongArray.push(guess);
    if (guess === answer) {
        alert("You Win!");
        wins++;
        reset();
    } else if (lives == 0) {
        alert("You Lose!");
        losses++;
        reset();
    }
    startGame();
    lives--;
}