const gameView = document.querySelector(".game-view");
const gameChoicesGroup = document.querySelector(".game-choices");
const pointsUI = document.querySelector(".points");
const gameData = ["rock", "paper", "scissors"];
let playerScore = 0;
let humanPick;
let computerPick;
let winner;
let isHumanTurn = true;

const gameChoices = `
<div class="game-view-container">
<img src="./images/bg-triangle.svg" class="background-triangle" />
<div class="game-choices">
${gameData
  .map((option, i) => {
    return `<div class="game-choice ${option}" id="${i}">
    <div class="game-choice__inner">
      <img src="./images/icon-${option}.svg" alt="${option}" />
    </div>
  </div>`;
  })
  .join("")}
</div>
</div>
`;

const renderGameSelections = (humanPickUI) => {
  // humanPick = humanPick.outerHTML;
  let gameSelections = `
    <div class="game-selections">
        <div class="side side-left">
            <h4 class="game-selections_subhed">You Picked</h4>
            <div class="pick-human">
                ${humanPickUI.outerHTML}
            </div>
        </div>
        <div class="side side-right">
            <h4 class="game-selections_subhed">The House Picked</h4>
            <div class="pick-computer">
                <div class="placeholder-pick"></div>
            </div>
        </div>
    </div>
      `;

  gameView.insertAdjacentHTML("beforeend", gameSelections);
  setTimeout(computerSelection, 1000);
};

window.onload = () => {
  resetGame();
};

const resetGame = () => {
  gameView.innerHTML = "";
  updateScore();
  renderGameOptions();
  isHumanTurn = true;
};

const renderGameOptions = () => {
  gameView.insertAdjacentHTML("beforeend", gameChoices);
};

const updateScore = () => {
  pointsUI.textContent = playerScore;
};

const displayHumanSelection = (e) => {
  if (isHumanTurn) {
    if (e.target.closest(".game-choice")) {
      let humanPickUI = e.target.closest(".game-choice");
      humanPick = Number(humanPickUI.id);

      gameView.innerHTML = "";
      renderGameSelections(humanPickUI);
      isHumanTurn = false;
    }
  }
};

const computerSelection = () => {
  computerPick = Math.floor(Math.random() * 3);

  const computerPickUI = `
    <div class="game-choice ${gameData[computerPick]}" id="${computerPick}">
        <div class="game-choice__inner">
        <img src="./images/icon-${gameData[computerPick]}.svg" alt="${gameData[computerPick]}" />
        </div>
    </div>
    `;

  const computerContainer = document.querySelector(".pick-computer");
  computerContainer.innerHTML = computerPickUI;

  setTimeout(decideWinner, 1000);
};

const decideWinner = () => {
  //   console.log(humanPick, computerPick);

  if (humanPick === computerPick) {
    winner = "draw";
  } else if (humanPick === 0 && computerPick === 2) {
    playerScore++;
    winner = "you win";
  } else if (humanPick === 1 && computerPick === 0) {
    playerScore++;
    winner = "you win";
  } else if (humanPick === 2 && computerPick === 1) {
    playerScore++;
    winner = "you win";
  } else {
    playerScore > 0 ? playerScore-- : playerScore;
    winner = "you lose";
  }

  let resultUI = `
        <div class="game-result side">
            <div>
            <h2 class="game-result-title">${winner}</h2>
            <button class="btn-restart">Play Again</button>
            </div>
        </div>`;

  let humanSelect = document.querySelector(".side-left");
  humanSelect.insertAdjacentHTML("afterend", resultUI);
  pointsUI.textContent = playerScore;
};

gameView.addEventListener("click", displayHumanSelection);
gameView.addEventListener("click", function (e) {
  if (e.target.closest(".btn-restart")) {
    resetGame();
  }
});
