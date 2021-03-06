//Get a random number 0-100
/*let randomNumber = Math.random().toFixed(2) * 100;
console.log(randomNumber);*/

//Get a random number 1-100
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
let time = 10;
let resultArea = document.getElementById("resultArea");
let chance = 3;
document.getElementById('timecount').innerHTML = time;
let chanceArea = document.getElementById("chanceArea");
chanceArea.innerHTML = `${chance}`;
let history = [];

let historyArea = document.getElementById("historyArea")
    //Input box
let userguess = document.getElementById("userInput")

let GuessButton = document.getElementById("GuessButton")

let YourGameHistory = {};


GuessButton.addEventListener("click", guess)
ResetButton.addEventListener("click", reset)


function reset() {
    timeOut();
    chance = 3;
    history = [];
    document.getElementById("GuessButton").disabled = false;
    document.getElementById("StartButton").disabled = false;
    historyArea.innerHTML = `${history}`;
    chanceArea.innerHTML = `${chance}`;
    message = "";
    resultArea.innerHTML = `${message}`;
    randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    document.getElementById('userInput').value = '';
    document.getElementById("ResetButton").style.color = "";
    time = 10;
    document.getElementById('timecount').innerHTML = time;
}


function guess() {
    time = 10;
    let userNumber = userguess.value;
    if (history.includes(userNumber)) {
        alert("You have already guessed that number! Try other one!")
        time = 10;
        return;
    }
    let message = '';
    chance = chance - 1;
    if (chance > 0) {
        if (userNumber == randomNumber) {
            message = "You Won! Reset to play again";
            document.getElementById("GuessButton").disabled = true;
            document.getElementById("ResetButton").style.color = "red";
            timeOut();
            history.push(userNumber);
        } else if (userNumber === '') {
            message = "If you do not type anything, you gonna lose";
        } else if (userNumber < randomNumber) {
            message = "Too Small";
            history.push(userNumber);
        } else if (userNumber > randomNumber) {
            message = "Too Big ";
            history.push(userNumber);
        }
    } else {
        if (userNumber == randomNumber) {
            message = "You Won! Reset to play again";
            document.getElementById("ResetButton").style.color = "red";
            history.push(userNumber);
        } else {
            message = "You ran out of chance! Click reset to play again";
            document.getElementById("resultArea").style.color = "red";
            document.getElementById("ResetButton").style.color = "red";
            history.push(userNumber);
        }
        document.getElementById("GuessButton").disabled = true;
        document.getElementById("StartButton").disabled = true;
    }
    resultArea.innerHTML = `${message}`;
    chanceArea.innerHTML = `${chance}`;
    historyArea.innerHTML = `${history}`;


}

// time start from 0
let myTime; // timer will be assign to this variable

function timecounting() {
    myTime = setInterval(() => {
            time -= 1
            if (time == 0 && chance > 0) {
                timeOut();
                timecounting();
                guess()
            } else if (chance === 0) {
                timeOut();

            }
            document.getElementById('timecount').innerHTML = time;
        }, 1000) // every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}

function timeOut() {
    clearInterval(myTime);
    time = 10;
}

StartButton.addEventListener("click", timecounting);