const gameView = document.querySelector(".game-view");
const gameChoicesGroup = document.querySelector(".game-choices");
const pointsUI = document.querySelector(".points");
let playerScore = 0;

const gameChoices = `
<div class="game-choices">
<div class="game-choice rock" id="1">
  <div class="game-choice__inner">
    <img src="./images/icon-rock.svg" alt="rock" />
  </div>
</div>
<div class="game-choice paper" id="2">
  <div class="game-choice__inner">
    <img src="./images/icon-paper.svg" alt="paper" />
  </div>
</div>
<div class="game-choice scissors" id="3">
  <div class="game-choice__inner">
    <img src="./images/icon-scissors.svg" alt="scissors" />
  </div>
</div>
</div>
`;

// const gameSelections = `
// <div class="game-selections">
//         <div class="side side-left">
//         <h4 class="game-selections_subhed">You Picked</h4>
//         <div class="pick-human">
//           <div class="game-choice rock">
//             <div class="game-choice__inner">
//               <img src="./images/icon-rock.svg" alt="rock" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="side side-right">
//         <h4 class="game-selections_subhed">Computer Picked</h4>
//         <div class="pick-computer">
//           <div class="game-choice paper">
//             <div class="game-choice__inner">
//               <img src="./images/icon-paper.svg" alt="paper" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="game-result">
//         <h2>You Win/You Lose</h2>
//         <button class="btn-restart">Play Again</button>
//       </div>
//       </div>
// `;

var gameSelections = `
    <div class="game-selections">
        <div class="side side-left">
        <h4 class="game-selections_subhed">You Picked</h4>
        <div class="pick-human">
        <div class="game-choice rock" id="1">
            <div class="game-choice__inner">
                <img src="./images/icon-rock.svg" alt="rock" />
            </div>
        </div>
        </div>
      </div>

      <div class="side side-right">
        <h4 class="game-selections_subhed">Computer Picked</h4>
        <div class="pick-computer">
        </div>
      </div>

      <div class="game-result">
        <h2>You Win/You Lose</h2>
        <button class="btn-restart">Play Again</button>
      </div>
      </div>`;

const resetGame = () => {
  //reset the score to 0
  playerScore = 0;
  updateScore();
  renderGameOptions();
};

const renderGameOptions = () => {
  //render game options
  gameView.insertAdjacentHTML("beforeend", gameChoices);
};

// const renderGameSelections = (humanPick) => {

//     gameView.appendChild(gameSelections);
// }

const updateScore = () => {
  pointsUI.textContent = playerScore;
};

const displayHumanSelection = (e) => {
  // console.log(e.target);

  if (e.target.closest(".game-choice")) {
    humanPick = e.target.closest(".game-choice");

    console.log(humanPick);

    gameView.innerHTML = "";
    gameView.insertAdjacentHTML("beforeend", gameSelections);

    if (e.target.closest(".rock")) {
      console.log("rock picked");
    }
  }
};

//display computer selection & whether won/lost
//assign points

window.onload = () => {
  resetGame();
};

//reset the game

//render the options UI

//render the human selection UI

//computer randomly picks number & both selections render UI

//determine whether human wins or loses

gameView.addEventListener("click", displayHumanSelection);
