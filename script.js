//  1 - create the choices
const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function playGame() {
  humanChoice = getHumanChoice(CHOICES);
  computerChoice = getComputerChoice(CHOICES);
  playRound(humanChoice, computerChoice);
}

function playRound(humanChoice, computerChoice) {
  switch (true) {
    case humanChoice === computerChoice:
      console.log(`It's a Draw ${humanChoice} ${computerChoice}`);
      break;

    case humanChoice === "rock" && computerChoice === "scissors":
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;

    case humanChoice === "paper" && computerChoice === "rock":
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;

    case humanChoice === "scissors" && computerChoice === "paper":
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;

    default:
      console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
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

function getHumanChoice(choices) {
  let humanInput = prompt("Choice Rock,Paper or Scissors");
  humanInput = humanInput.toLowerCase();
  console.log(humanInput);
  let choice;
  switch (humanInput) {
    case "rock":
      choice = choices[0];
      return choice;
    case "paper":
      choice = choices[1];
      return choice;
    case "scissors":
      choice = choices[2];
      return choice;
    default:
      alert("You have entered an Invalid input...");
  }
}
