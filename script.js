//  1 - create the choices
const CHOICES = ["rock", "paper", "scissors"];

const humanScoreEl = document.querySelector("#human-score");
const computerScoreEl = document.querySelector("#computer-score");
const resetBtnEl = document.querySelector("#reset-btn");

const humanChoiceImgEl = document.querySelector("#human-choice-img");
const humanChoiceTxtEl = document.querySelector("#human-choice-txt");

const computerChoiceImgEl = document.querySelector("#computer-choice-img");
const computerChoiceTxtEl = document.querySelector("#computer-choice-txt");

const humanChoicesBtnsEl = document.querySelector("#human-choices");

const humanSideEl = document.querySelector(".human-side");
const computerSideEl = document.querySelector(".computer-side");

console.log(computerSideEl);
let humanScore = 0;
let computerScore = 0;

humanChoicesBtnsEl.addEventListener("click", (event) => {
  playGame(event);
});
resetBtnEl.addEventListener("click", () => {
  resetGame();
  displayScores(humanScore, computerScore);
});

function playGame(event) {
  if (computerScore === 5 || humanScore === 5) {
    whosWon(); // Call the function that handles who won
    return; // Stop the game
  }

  // Continue with the game logic if neither player has reached 5
  humanChoice = getHumanChoice(event);
  computerChoice = getComputerChoice(CHOICES);
  displayChoices(humanChoice, computerChoice);
  playRound(humanChoice, computerChoice);
  displayScores(humanScore, computerScore);
}

function playRound(humanChoice, computerChoice) {
  switch (true) {
    case humanChoice === computerChoice:
      console.log(`It's a Draw ${humanChoice} ${computerChoice}`);
      break;

    case humanChoice === "rock" && computerChoice === "scissors":
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      addPoints("human");
      break;

    case humanChoice === "paper" && computerChoice === "rock":
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      addPoints("human");
      break;

    case humanChoice === "scissors" && computerChoice === "paper":
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      addPoints("human");
      break;

    default:
      console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
      addPoints("computer");
      break;
  }
  console.log(`player score:${humanScore}\nComputer score: ${computerScore}`);
}
function getComputerChoice(choices) {
  let randomNum = Math.floor(Math.random() * 3);
  let choice = choices[randomNum];
  console.log(choice);
  return choice;
}
function getHumanChoice(event) {
  humanInput = event.target.textContent;
  humanInput = humanInput.toLowerCase();
  return humanInput;
}
function addPoints(player) {
  switch (player) {
    case "computer":
      computerScore++;
      break;
    case "human":
      humanScore++;
  }
}
function displayChoices(humanChoice, computerChoice) {
  humanChoiceImgEl.innerHTML = `<img src='./images/left-${humanChoice}.png' alt='a illustration of a fist' />`;
  humanChoiceTxtEl.textContent = humanChoice;
  computerChoiceImgEl.innerHTML = `<img src='./images/right-${computerChoice}.png' alt='a illustration of a fist' />`;
  computerChoiceTxtEl.textContent = computerChoice;
}
function displayScores(humanScore, computerScore) {
  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;
}
function resetGame() {
  humanScore = 0;
  computerScore = 0;
}

function whosWon() {
  if (humanScore === 5) {
    humanChoiceTxtEl.textContent = "You Won!";
    computerChoiceTxtEl.textContent = "Computer lost...";
  } else if (computerScore === 5) {
    computerChoiceTxtEl.textContent = "Computer Won!";
    humanChoiceTxtEl.innerHTML = "You lost...";
  }
}
