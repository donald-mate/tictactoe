const gameboard = (() => {
  let markerArray = ["X", "O", "O", "O", "X", "O", "X", "O", "X"];
  return { markerArray };
})();
const displayController = (() => {
  let turn = 1;
  const board = document.getElementbyClassName("board");
  const fillBoard = () => {
    for (let i = 0; i <= board.length; i++) {
      board[i].innerHTML = gameboard.markerArray[i];
    }
  };
  return { fillBoard };
})();
const playerCreator = (name, marker) => {
  return { name, marker };
};
const player1 = playerCreator("Donald", "X");
const player2 = playerCreator("Maribel", "O");
const game = displayController();
game.fillBoard();

let mark = document.createTextNode("X");
aOne.appendChild(mark);

const aOne = document.getElementById("a-one");

aOne.addEventListener("click", function () {});
