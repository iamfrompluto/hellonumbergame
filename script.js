let secretNumber = getRandom(1, 5000);
let okButton = document.querySelector("#okButton");
let h2 = document.querySelector("h2");
let hints = document.querySelector("h3");
let userInput = document.querySelector("input");
let lives = 50;
let livesHeading = document.querySelector("h4");
let newgameButton = document.querySelector("#newgameButton");
let hello = document.querySelector("h1");

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
getRandom(10,50);

okButton.onclick = function (event) {
    event.preventDefault();

    if (userInput.value == secretNumber) {
        h2.innerHTML = "Congratulations! :DDD you won a hello :)";
        hints.innerHTML = "    ";
    } else {
        lives = lives - 1;
        livesHeading.innerHTML = "You have: " + lives + " lives left";

        h2.innerHTML = "sorry, you arent lucky today DDD:";
        if (secretNumber > userInput.value) {
            hints.innerHTML = "not there! the secret number is higher...";
        } else {
            hints.innerHTML = "oops, the secret number is smaller...";
        }
        if (lives == 0) {
            okButton.disabled = true;
            h2.innerHTML = "my guy, sorry, you have lost :(";
        }
    }

}
newgameButton.onclick = function (event) {
    event.preventDefault();
    secretNumber=getRandom(1,500);
    hello.innerHTML = "hello number game >:)";
    lives = 50;
    livesHeading.innerHTML = "you know you have " + lives +" lives again? :0";
    h2.innerHTML = "write a number and press the button :D";
    okButton.disabled = false;
    hints.innerHTML = "hints";
}
