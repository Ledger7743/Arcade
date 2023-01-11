// TIC-TAC-TOE
// As users playing a two player game we want to:

// enter our names and have them displayed
// have our order chosen for us by the game
// take turns placing our marks in empty spaces
// not be able to place our marks in an occupied space
// be told when a move causes a player to win, or to draw
// start the game over without having to reset the browser
// As a user playing a one player game I want to:

// see the name 'Computer' displayed as my opponent
// have the Computer player make moves as if it were a human player with the correct mark in an empty space
// As a user playing a single player game I would be delighted to:

// have the Computer make 'better-than-guessing' choices when placing a mark on the board
// set the board size myself ("wider" or "taller" than 3x3)

// const testingElem = document.getElementById('title');

// console.log(testingElem);

// *************************State*************************

//have an initial state/game state - initialize it as an empty object
let state = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

//creating a reset function state in the game

const resetState = () => {
  players: ["x", "o"],
    (state.getCurrentPlayer = () => state.players[state.getCurrentPlayerIdx]);
  state.players = ["", ""];
  state.scores = [0,0];
  state.getCurrentPlayerIdx = 0;
};

// ************************* DOM SELECTORS************************
const scoreElem = document.querySelector('#score');
console.log(scoreElem);
const boardElem = document.querySelector("#board");
// console.log(boardElem);
const playerTurnElem = document.querySelector("#player-turn");
// console.log(playerTurnElem);


// ************************* GAME LOGIC HELPER FUNCTION************************
  const changeTurn = () => {
    //switch players
    state.getCurrentPlayerIdx=Math.abs(state.getCurrentPlayerIdx -1);
  
    // if it happens to be a one
  }



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
  changeTurn();
  renderPlayer();
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
        <button class="start">Start Game</button>
        `;
  } else {
    //if we do have players
    text = `It's currently <span class='player'>${state.getCurrentPlayer()}</span>'s turn.`;
  }
  playerTurnElem.innerHTML = text;
};

const render = () => {
  
  renderBoard();
  renderScore();
  renderPlayer();
  // HandleClick();
  // changeTurn();
};

// *************************Event Listeners***********************

// const takeTurn = (cellIdx) => {
//   const card = state.board[cellIdx];

//   card.isTurned = true;
//   const lastTurnedCard = state.board[state.lastTurnedidx] || {};
//   console.log('this is the last turned: ', lastTurnedCard);

//   if (lastTurnedCard.value === card.value) {
//     state.scores[state.getCurrentPlayerIdx] += 1;
//     state.lastTurnedIdx = -1;
//   }
//   changeTurn();
//   state.lastTurnedIdx = cellIdx;
//   render();
// }


// *************************Event Listeners***********************
// boardElem.addEventListener('click', (event) => {
//   if (event.target.className !== 'cell') return;
//   // means if we accidentally clicked on something we didn't mean to, it will have a do-over
// ;
//   const cellIdx = event.target.dataset.index;
//   takeTurn[cellIdx];
//   render();

// });

const renderScore = () => {
  scoreElem.innerText = `
  <div>${state.players[0]} : ${state.players[0]}</div>
  <div>${state.players[1]} : ${state.players[1]}</div>
  `;
};


playerTurnElem.addEventListener("click", (event) => {
  console.log("this is the event from playerTurnElem", event.target);
  if (event.target.className === "start") {
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
    state.players[1]= player2Value;
    console.log(player2Input.value);
    render();
  }
 
});
let count = 0;


function HandleClick() {
 const gameboard = document.querySelector(".gameboard"); 

  gameboard.addEventListener("click", (e) => {
    if (!e.target.innerHTML) {
      count % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
      ++count; 
      
      changeTurn();
    }
    
    // if (e.target.className !== 'cell') return;
    // if(innerHTML is taken so and so onabort, then don't do anything else) return;
    //where we want "not to be able to place our marks in an occupid space"
  });
   
}

function winner() {
  //test for hor dia , vers
  // 
  
  // <div class ="winner message" id="winnerMessage">
  //     <div id="winnerMessageText"></div>
  //     <button id ="restartButton">Restart</button>
  // </div>
  
}
// *************************BOOTSTRAPPING*************************
resetState();
render();
//needs to call the function afterwards
// console.log(state.board.length);
// console.log(state.board);
