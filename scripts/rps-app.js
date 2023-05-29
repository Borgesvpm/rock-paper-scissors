// Caching the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomNumber]
    return computerChoice;
}

function convertLetterToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    else return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertLetterToWord(user)}${smallUserWord} beats ${convertLetterToWord(computer)}${smallCompWord}. You win!`

    const userChoice_div = document.getElementById(user)
    userChoice_div.classList.add("green-glow");
    setTimeout(function () { userChoice_div.classList.remove("green-glow"); }, 500);
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertLetterToWord(computer)}${smallCompWord} beats ${convertLetterToWord(user)}${smallUserWord}. You lose!`

    const userChoice_div = document.getElementById(user)
    userChoice_div.classList.add("red-glow");
    setTimeout(function () { userChoice_div.classList.remove("red-glow"); }, 500);
}

function draw(user, computer) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertLetterToWord(user)}${smallUserWord} is the same as ${convertLetterToWord(computer)}${smallCompWord}. Draw!`

    const userChoice_div = document.getElementById(user)
    userChoice_div.classList.add("gray-glow");
    setTimeout(function () { userChoice_div.classList.remove("gray-glow"); }, 500);
}

function game(userChoice) {
    let computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    })

    paper_div.addEventListener("click", function () {
        game("p");
    })

    scissors_div.addEventListener("click", function () {
        game("s");
    })
}

main();
