const squares = document.querySelectorAll(".square");
let currentPlayer = "X";
let gameEnded = false; // Add a flag to track if the game has ended

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (!gameEnded && square.innerHTML === "") {
      // Check if the game has not ended
      square.innerHTML = currentPlayer;
      square.classList.add(currentPlayer);
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById(
        "status"
      ).innerHTML = `Player ${currentPlayer}'s turn`;
      checkWinner();
    }
  });
});

function resetGame() {
  squares.forEach((square) => {
    square.innerHTML = "";
    square.classList.remove("X");
    square.classList.remove("O");
    square.classList.remove("winning-square"); // Remove the winning-square class
  });
  document.getElementById("status").innerHTML = "Player X's turn";
  currentPlayer = "X";
  gameEnded = false; // Reset the gameEnded flag
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      squares[a].innerHTML !== "" &&
      squares[a].innerHTML === squares[b].innerHTML &&
      squares[a].innerHTML === squares[c].innerHTML
    ) {
      document.getElementById(
        "status"
      ).innerHTML = `Player ${squares[a].innerHTML} wins!`;
      gameEnded = true; // Set the gameEnded flag to true

      // Add the winning-square class to the winning squares
      squares[a].classList.add("winning-square");
      squares[b].classList.add("winning-square");
      squares[c].classList.add("winning-square");

      break;
    }
  }
}
