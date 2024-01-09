let you;
let yourScore = 0;
let computer;
let computerScore = 0;
let gameOver = false;

let choices = ["rock", "paper", "scissor"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("all-choice").append(choice);
    }
}

function selectChoice() {
    if (gameOver) return;

    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    computer = choices[Math.floor(Math.random() * 3)];
    document.getElementById("computer-choice").src = computer + ".png";

    if (you == computer) {
        yourScore += 1;
        computerScore += 1;
    } else {
        if (you == "rock") {
            if (computer == "scissor") {
                yourScore += 1;
            } else if (computer == "paper") {
                computerScore += 1;
            }
        } else if (you == "scissor") {
            if (computer == "paper") {
                yourScore += 1;
            } else if (computer == "rock") {
                computerScore += 1;
            }
        } else if (you == "paper") {
            if (computer == "rock") {
                yourScore += 1;
            } else if (computer == "scissor") {
                computerScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerHTML = `<h4>Your Score : ${yourScore}</h4>`;
    document.getElementById("computer-score").innerHTML = `<h4>Computer Score : ${computerScore}</h4>`;

    if (yourScore === 10) {
        document.getElementById("result").innerHTML = `<img src="youwin.gif" alt="content">`;
        gameOver = true;
    } else if (computerScore === 10) {
        document.getElementById("result").innerHTML = `<img src="loss.gif" alt="content">`;
        gameOver = true;
    }

    if (gameOver) {
        setTimeout(() => {
            resetGame();
        }, 4000); // Restart the game after 4 seconds (you can adjust the time as needed)
    }
}

function resetGame() {
    yourScore = 0;
    computerScore = 0;
    document.getElementById("your-score").innerHTML = `<h4>Your Score : ${yourScore}</h4>`;
    document.getElementById("computer-score").innerHTML = `<h4>Computer Score : ${computerScore}</h4>`;
    document.getElementById("result").innerHTML = "";
    gameOver = false;
}
