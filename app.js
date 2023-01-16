// TIC-TAC-TOE
// not be able to place our marks in an occupied space
// be told when a move causes a player to win, or to draw
// start the game over without having to reset the browser
// As a user playing a one player game I want to:
// *************************State*************************
const gameStatus = document.querySelector(".game-status");
// let cell = Array.from(document.getElementsByClassName("cell"));

//have an initial state/game state - initialize it as empty
let state = {
  board: ["", "", "", "", "", "", "", "", ""],
};
//pause the game once over
let gameActive = true;
let currentPlayer = "x";
let player = "x";
let spaces = Array(9).fill(null);

//creating a reset function state in the game
function resetState() {
  state.board = ["", "", "", "", "", "", "", "", ""];
  state.winner = null;
  state.getCurrentPlayer = () => state.players[state.currentPlayerIdx];
  players: ["x", "o"],
    (state.getCurrentPlayer = () => state.players[state.getCurrentPlayerIdx]);
  state.players = ["", ""];
  // state.scores = [0,0];
  state.getCurrentPlayerIdx = 0;
  state.lastTurnedIdx = -1;
}

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// ************************* DOM SELECTORS************************
// const scoreElem = document.querySelector('#score');
// console.log(scoreElem);
const boardElem = document.querySelector("#board");
// console.log(boardElem);
const playerTurnElem = document.querySelector("#player-turn");
// console.log(playerTurnElem);

// ************************* DOM MANIPULATION FUNCTIONS************************
const renderBoard = () => {
  // make sure the board is clear
  boardElem.innerHTML = ""; // not ideal on clearing the board
  //iterate through the state.board
  const table = document.createElement("table");
  table.classList.add("gameboard");
  board.appendChild(table);
  const createTD = (idname, index) => {
    const TD = document.createElement("td");
    const TR = document.getElementsByTagName("tr")[index];
    TD.classList.add(idname);

    TR.insertCell(TD);
  };
  for (let i = 0; i < 3; i++) {
    //create elements
    const cellElem = document.createElement("tr");
    const name = "Cell" + i;
    table.appendChild(cellElem);
    console.dir(cellElem);
    cellElem.classList.add(name);
    createTD(i + "0", i);
    createTD(i + "1", i);
    createTD(i + "2", i);
  }
  HandleClick();
  handleChangeTurn();
  renderPlayer();
  // handleWinClick();
};

// renders the player div below the grid
const renderPlayer = () => {
  let text;
  //let text is not assigned to anything and then conditionally signed to...
  //have text to display current player
  //conditionally render players
  // if there are no players, we want to display an input

  if (!state.players[0] || !state.players[1]) {
    // if no state. players at index zero or no state.players at index 1
    // then we reset our text to be this string
    text = `
        <input name="player1" placeholder="Enter Player 1 name" >
        <input name="player2" placeholder="Enter Player 2 name" >
        <button type="button" class="start">Start Game</button>
        `;
  } else {
    //if we do have players
    // if (state.winner) {
    //   text = `<span class='player'>${state.winner} has won!</span>`;
    // } else {
    text = `It's currently <span class='player'>${state.getCurrentPlayer()}</span>'s turn.`;
  }
  // }
  playerTurnElem.innerHTML = text;

  // if (state.winner) {

  //   resetButton.innerHTML = `Play Again!`;

  //   playerTurnElem.appendChild(resetButton);
  // }
};

const resetButton = document.createElement("button");
resetButton.addEventListener("click", () => {
  console.log("this is the click:");
  let text;
  text = ` 
        <button type="button" class="start">Restart Game</button>
        `;
  resetState();
  render();
});

const render = () => {
  renderBoard();
  renderPlayer();
  // HandleClick();
  // changeTurn();
};

// *************************Event Listeners***********************
function handleCellPlayed(clickedCell, clickedCellIndex) {
  state[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

boardElem.addEventListener("click", (event) => {
  if (event.target.className !== "cell") return;
  const cellIdx = event.target.dataset.index;
  console.dir(event.target.dataset);
  takeTurn(cellIdx);
  // checkBoard();
  render();
});

playerTurnElem.addEventListener("click", (event) => {
  console.log("this is the event from playerTurnElem", event.target);
  if (event.target.className === ".restart-game") {
    resetButton.classList.add(".restart-game");
    resetState();
    render();
  } else if (event.target.className === "start") {
    //get the input of player1
    const player1Input = document.querySelector("input[name=player1]");
    // get the value from the input
    const player1Value = player1Input.value;

    state.players[0] = player1Value;
    console.log(player1Input.value);

    //do the same thing for player2
    const player2Input = document.querySelector("input[name=player2]");
    // get the value from the input
    state.players[1] = player2Input;
    const player2Value = player2Input.value;
    state.players[1] = player2Value;
    console.log(player2Input.value);
    render();
  }
});
let count = 0;

// ************************* GAME LOGIC HELPER FUNCTION************************
function handleChangeTurn(e) {
  currentPlayer = currentPlayer === "x" ? "o" : "x";
  //switch players
  if (state.getCurrentPlayerIdx === 0) {
    state.getCurrentPlayerIdx = 1;
  } else {
    state.getCurrentPlayerIdx = 0;
  }
  // state.getCurrentPlayerIdx = Math.abs(state.getCurrentPlayerIdx - 1);
  text = `It's currently <span class='player'>${state.getCurrentPlayer()}</span>'s turn.`;
  playerTurnElem.innerHTML = text;
  // }
}

// in this function, we are putting x's on the html for each click
function HandleClick() {
  const gameboard = document.querySelector(".gameboard");

  // let id = document.querySelectorAll(".board.cell");

  gameboard.addEventListener(
    "click",
    (e) => {
      if (!e.target.innerHTML) {
        // condition to test ? value if true : value if false
        // if count is divided by 0 | this value is true "x" and this value is false "o"
        count % 2 === 0
          ? (e.target.innerHTML = "x")
          : (e.target.innerHTML = "o");
        ++count;
        //id
      }
      // state.board;
      // (win condition belongs)
      handleChangeTurn();
    }

    // if(innerHTML is taken so and so on abort, then don't do anything else) return;
    //where we want "not to be able to place our marks in an occupid space"
  );
}

const checkWinBoard = () => {
  let winThisRound = false;
  for (let i = 0; i <= 7; i++) {
    const winner = winConditions[i];
    let a = state[winner[0]];
    let b = state[winner[1]];
    let c = state[winner[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      winThisRound = true;
      break;
    }
  }

  if (winThisRound) {
    text = `<span class='player'>${state.getCurrentPlayer()}</span> Won!`;
    gameStatus.innerHTML.text;
    gameActive = false;
    return;
  }
  handleChangeTurn();
};

// function handleCellClick(clickedCellEvent) {
//   const clickedCell = clickedCellEvent.target;
//   const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

//   if (reset(state.board)[clickedCellIndex] !== "" || !gameActive) {
//     return;
//   }

//   handleCellPlayed(clickedCell, clickedCellIndex);
//   checkWinBoard();
// }
// ************************ENDGAME/WINNER************************

// ************************RESET GAME************************

// function restartGame() {
//   gameActive = true;
//   currentPlayer = "x";
//   state = ["", "", "", "", "", "", "", "", ""];
//   document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
// }
// *************************BOOTSTRAPPING*************************
resetState();
render();
// restartGame();
//needs to call the function afterwards
// console.log(state.board.length);
// console.log(state.board);

document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
// document.querySelector(".restart-game").addEventListener("click", restartGame);
