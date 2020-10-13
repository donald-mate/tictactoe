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
  let markerArray = ["X", "O", "O", "O", "X", "O", "X", "O", "X"];
  const fillBoard = () => {
    for (let i = 0; i <= boardArray.length; i++) {
      let marker = markerArray[i];
      let display = document.createTextNode(marker);
      boardArray[i].appendChild(display);
    }
  }
  const makeMove = ((square, marker) => {
    let boardPosition = boardArray.indexOf(square);
    markerArray[boardPosition] = marker;
    gameBoard.fillBoard();
  })  
  return { fillBoard, makeMove };
})();
const gameFlow = ((clickedSquare) => {
  let turnTracker = 1;
  const move =(() => {
    if (turnTracker % 2 == 0) {
      let square = clickedSquare;
      let marker = "O";
      gameBoard.makeMove(square, marker);
      turnTracker ++;
    } else {
      let square = clickedSquare;
      let marker = "X";
      gameBoard.makeMove(square, marker);
      turnTracker ++;
    }
  })
  return { move };
})();

// PLAYER CREATION
// const playerCreator = (name, marker) => {
//   return { name, marker };
// };
// const player1 = playerCreator("Donald", "X");
// const player2 = playerCreator("Maribel", "O");





// EVENT LISTENERS
aOne.addEventListener("click", function () {
  // calls gameFlow with aOne, gameFlow checks the turn and calls makeMove in gameBoard, which then calls fillBoard
  // gameFlow then increases turnTracker
  // gameBoard.makeMove(aOne);
  // gameBoard.fillBoard();
  gameFlow.move(aOne);
});
// aTwo.addEventListener("click", function () {});
// aThree.addEventListener("click", function () {});
// bOne.addEventListener("click", function () {});
// bTwo.addEventListener("click", function () {});
// bThree.addEventListener("click", function () {});
// cOne.addEventListener("click", function () {});
// cTwo.addEventListener("click", function () {});
// cThree.addEventListener("click", function () {});
