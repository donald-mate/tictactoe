// const gameboard = (() => {
//   let markerArray = ["X", "O", "O", "O", "X", "O", "X", "O", "X"];
//   return { markerArray };
// })();
// const displayController = (() => {
//   let turn = 1;
//   const board = document.getElementbyClassName("board");
//   const fillBoard = () => {
//     for (let i = 0; i <= board.length; i++) {
//       board[i].innerHTML = gameboard.markerArray[i];
//     }
//   };
//   return { fillBoard };
// })();
const playerCreator = (name, marker) => {
  return { name, marker };
};
const player1 = playerCreator("Donald", "X");
const player2 = playerCreator("Maribel", "O");
// const game = displayController();
// game.fillBoard();
const aOne = document.getElementById("a-one");
const aTwo = document.getElementById("a-two");
const aThree = document.getElementById("a-three");
const bOne = document.getElementById("b-one");
const bTwo = document.getElementById("b-two");
const bThree = document.getElementById("b-three");
const cOne = document.getElementById("c-one");
const cTwo = document.getElementById("c-two");
const cThree = document.getElementById("c-three");
const boardArray = [aOne, aTwo, aThree, bOne, bTwo, bThree, cOne, cTwo, cThree];

let markerArray = ["X", "O", "O", "O", "X", "O", "X", "O", "X"];
for (let i = 0; i <= boardArray.length; i++) {
  let marker = markerArray[i];
  let display = document.createTextNode(marker);
  boardArray[i].appendChild(display);
}




// let display = document.createTextNode("X")
// aOne.appendChild(display);


aOne.addEventListener("click", function () {});
