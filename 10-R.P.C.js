let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = {
    Wins: 0,
    Losses: 0,
    Ties: 0,
  };
}

updateScoreElement();

console.log(score);

let computerMove = "";

function playGame(playerMove) {
  pickComputerMove();

  let result = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You Lose.";
    } else if (computerMove === "Paper") {
      result = "You Win.";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "You Lose.";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You Lose.";
    } else if (computerMove === "Scissors") {
      result = "You Win.";
    }
  }

  if (result === "You Win.") {
    score.Wins += 1;
  } else if (result === "You Lose.") {
    score.Losses += 1;
  } else if (result === "Tie.") {
    score.Ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `    You
<img src="${playerMove}-emoji.png" class="move-icon" />
<img src="${computerMove}-emoji.png" class="move-icon" />
CPU
</p>.`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}.`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
}

function resetScore() {
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  localStorage.setItem("score", JSON.stringify(score));
}