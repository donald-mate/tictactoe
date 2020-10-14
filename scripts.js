const aOne = document.getElementById("a-one");
const aTwo = document.getElementById("a-two");
const aThree = document.getElementById("a-three");
const bOne = document.getElementById("b-one");
const bTwo = document.getElementById("b-two");
const bThree = document.getElementById("b-three");
const cOne = document.getElementById("c-one");
const cTwo = document.getElementById("c-two");
const cThree = document.getElementById("c-three");

const gameBoard = (() => {
  const boardArray = [aOne, aTwo, aThree, bOne, bTwo, bThree, cOne, cTwo, cThree];
  let markerArray = [null, null, null, null, null, null, null, null, null];
  const makeMove = ((clickedSquare, marker) => {
    let boardPosition = boardArray.indexOf(clickedSquare);
    if (markerArray[boardPosition] == null) {
      markerArray[boardPosition] = marker;
      let display = document.createTextNode(markerArray[boardPosition]);
      boardArray[boardPosition].appendChild(display);
      gameFlow.advanceTurn();
    }
  })  
  return { makeMove };
})();

const gameFlow = (() => {
  let turnTracker = 1;
  const move = ((clickedSquare) => {
    if (turnTracker % 2 !== 0) {
      let marker = playerOne.marker;
      gameBoard.makeMove(clickedSquare, marker);
    } else {
      let marker = playerTwo.marker;
      gameBoard.makeMove(clickedSquare, marker);
    }
  })
  const advanceTurn = (() => {
    turnTracker++;
  })
  return { move, advanceTurn };
})();

// PLAYER CREATION
const playerCreator = (name, marker) => {
  return { name, marker };
};
const playerOne = playerCreator("Donald", "X");
const playerTwo = playerCreator("Maribel", "O");

// EVENT LISTENERS
aOne.addEventListener("click", function () {gameFlow.move(aOne);});
aTwo.addEventListener("click", function () {gameFlow.move(aTwo);});
aThree.addEventListener("click", function () {gameFlow.move(aThree);});
bOne.addEventListener("click", function () {gameFlow.move(bOne)});
bTwo.addEventListener("click", function () {gameFlow.move(bTwo);});
bThree.addEventListener("click", function () {gameFlow.move(bThree);});
cOne.addEventListener("click", function () {gameFlow.move(cOne);});
cTwo.addEventListener("click", function () {gameFlow.move(cTwo);});
cThree.addEventListener("click", function () {gameFlow.move(cThree);});




  // REMOVED FUNCTIONS
  // const fillBoard = () => {
  //   for (let i = 0; i <= boardArray.length; i++) {
  //     if (markerArray[i] == null) {
  //       continue;
  //     } else {
  //       let marker = markerArray[i];
  //       let display = document.createTextNode(marker);
  //       boardArray[i].appendChild(display);
  //     }
  //   }
  // }
  // const clearBoard = () => {
  //   for (let i=0; i <=boardArray.length; i++) {
  //     if (markerArray[i] == null) {
  //       continue;
  //     } else {
  //       let currentSquare = boardArray[i];
  //       currentSquare.removeChild(currentSquare.firstChild);
  //     }
  //   }
  // }