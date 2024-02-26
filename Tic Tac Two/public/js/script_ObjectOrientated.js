class TicTacToe {
  constructor() {
    this.board = Array(9).fill(null); // Initialize an array to represent the game board
    this.currentPlayer = "X"; // Player X starts the game
    this.statusElement = document.getElementById("statusTwo");
    this.boardElement = document.getElementById("boardTwo");
    this.resetButton = document.getElementById("restartButtonTwo"); // Fix button ID
    this.squares = document.querySelectorAll(".squareTwo");
    this.resetButton.addEventListener("click", () => this.resetGameTwo()); // Fix function name
    this.squares.forEach((square, index) => {
      square.addEventListener("click", () => this.handleMove(index));
    });
    this.render();
  }

  render() {
    // Update the game board display
    this.board.forEach((value, index) => {
      const square = document.getElementById(`squareTwo${index}`);
      square.textContent = value || ""; // Show X or O in the square, or leave it empty if null
    });

    // Update the status display
    if (!this.isGameOver()) {
      this.statusElement.textContent = `Player ${this.currentPlayer}'s turn`;
    }
  }

  handleMove(index) {
    // Check if the clicked square is empty and the game is not over
    if (!this.board[index] && !this.isGameOver()) {
      this.board[index] = this.currentPlayer; // Place the current player's symbol on the board
      this.render(); // Update the game display

      if (this.checkWin()) {
        this.statusElement.textContent = `Player ${this.currentPlayer} wins!`;
        this.markWinningSquares();
      } else if (this.board.every((square) => square !== null)) {
        this.statusElement.textContent = "It's a draw!";
      } else {
        // Switch players
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    }
  }

  isGameOver() {
    return this.checkWin() || this.board.every((square) => square !== null);
  }

  resetGameTwo() {
    this.board = Array(9).fill(null); // Reset the game state
    this.currentPlayer = "X";
    this.resetSquareColors(); // Reset square colors
    this.render(); // Update the game display
  }

  resetSquareColors() {
    // Reset background color of all squares
    this.squares.forEach((square) => {
      square.style.backgroundColor = "";
    });
  }

  checkWin() {
    // Define winning combinations
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    // Check if any winning combination is present on the board
    return winningCombinations.some((combination) => {
      const [a, b, c] = combination;
      return (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      );
    });
  }

  markWinningSquares() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    // Iterate through winning combinations
    winningCombinations.forEach((combination) => {
      const [a, b, c] = combination;
      // If all squares in a winning combination have the same value
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        // Mark winning squares with green background
        document.getElementById(`squareTwo${a}`).style.backgroundColor =
          "green";
        document.getElementById(`squareTwo${b}`).style.backgroundColor =
          "green";
        document.getElementById(`squareTwo${c}`).style.backgroundColor =
          "green";
      }
    });
  }
}

// Initialize the game
const ticTacToe = new TicTacToe();
