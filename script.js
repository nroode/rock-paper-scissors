const gameView = document.querySelector(".game-view");
const gameChoicesGroup = document.querySelector(".game-choices");
const pointsUI = document.querySelector(".points");

let playerScore = 0;
let humanPick;
let computerPick;
let winner;


const gameData = ['rock', 'paper', 'scissors'];

const gameChoices = `
<div class="game-choices">
${gameData.map((option, i) => {
    return `<div class="game-choice ${option}" id="${i}">
    <div class="game-choice__inner">
      <img src="./images/icon-${option}.svg" alt="${option}" />
    </div>
  </div>`
}).join('')}
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


const renderGameSelections = (humanPickUI) => { 
    // humanPick = humanPick.outerHTML;
    let gameSelections =  
    `
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
            </div>
        </div>

        <div class="game-result">
            <h2 class="game-result-title">You Win/You Lose</h2>
            <button class="btn-restart">Play Again</button>
        </div>
    </div>
      `;
      gameView.insertAdjacentHTML("beforeend",  gameSelections);
      computerSelection();

};

const computerSelection = () => {
    //randomly pick a number 

    computerPick = Math.floor(Math.random() * 3);
    console.log(computerPick);

    const computerPickUI = `
    <div class="game-choice ${gameData[computerPick]}" id="${computerPick}">
        <div class="game-choice__inner">
        <img src="./images/icon-${gameData[computerPick]}.svg" alt="${gameData[computerPick]}" />
        </div>
    </div>
    `;

    const computerContainer = document.querySelector('.pick-computer');
    computerContainer.insertAdjacentHTML('beforeend', computerPickUI);

    console.log(computerPickUI);
    decideWinner();

}

const decideWinner = () => {

        if (humanPick === computerPick) {
            winner = 'draw';
        } else if (humanPick === 0 && computerPick === 2) {
            playerScore++;
            winner = 'you win';
        } else if (humanPick === 1 && computerPick === 0) {
            playerScore++;
            winner = 'you win';
        } else if (humanPick === 2 && computerPick === 1) {
            playerScore++;
            winner = 'you win';
        } else {
            winner = 'house wins';
        }

        let winnerTxt = document.querySelector('.game-result-title');
        winnerTxt.textContent = winner;
        console.log(winner);

        pointsUI.textContent = playerScore;


}

const resetGame = () => {
gameView.innerHTML = "";
  //reset the score to 0
  
  updateScore();
  renderGameOptions();
};

const renderGameOptions = () => {
  //render game options
  gameView.insertAdjacentHTML("beforeend", gameChoices);
};


const updateScore = () => {
  pointsUI.textContent = playerScore;
};

const displayHumanSelection = (e) => {
  console.log(e.target.id);

  if (e.target.closest(".game-choice")) {
    humanPick = Number(e.target.id);
    let humanPickUI = e.target.closest(".game-choice");

    console.log(humanPickUI);

    gameView.innerHTML = "";
    renderGameSelections(humanPickUI);

    // gameView.insertAdjacentHTML("beforeend", renderGameSelections);

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
gameView.addEventListener("click", function(e) {
    if (e.target.closest('.btn-restart')){
        resetGame();
    }
} );
