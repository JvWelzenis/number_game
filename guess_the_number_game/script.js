var person = prompt ('Welcome! What is your name?');
if (person !=null) {
    alert(`Hey ${person}`);
};

function guessNumber() {
var randomNum = Math.floor(Math.random()* 25 + 1);
var guess;
guess = prompt ('Enter a number between 0 and 25 to start guessing...');
console.log("your gess is: " + guess);
if (guess == randomNum) {
    alert('Congratulations, you have won the game!');
} else {
    alert('Unfortunately, that is not correct!');
}
alert('Thanks for playing' + person );
}

guessNumber();