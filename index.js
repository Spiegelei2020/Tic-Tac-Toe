var board = document.getElementById('board');
var squares = [];
var currentPlayer = 'x';

for (var i = 0; i < 9; i++) {
  var square = document.createElement('div');
  square.className = 'square';
  square.id = i;
  square.addEventListener('click', function () {
    if (this.innerHTML === '') {
      this.innerHTML = currentPlayer;
      this.classList.add(currentPlayer);
      checkWin();
      currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    }
  });
  squares.push(square);
  board.appendChild(square);
}

function checkWin() {
  var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (var i = 0; i < winningCombos.length; i++) {
    var a = winningCombos[i][0];
    var b = winningCombos[i][1];
    var c = winningCombos[i][2];
    if (
      squares[a].innerHTML !== '' &&
      squares[a].innerHTML === squares[b].innerHTML &&
      squares[b].innerHTML === squares[c].innerHTML
    ) {
      alert(currentPlayer + ' wins!');
      resetBoard();
      return;
    }
  }

  var isDraw = true;
  for (var i = 0; i < squares.length; i++) {
    if (squares[i].innerHTML === '') {
      isDraw = false;
      break;
    }
  }
  if (isDraw) {
    alert("It's a draw!");
    resetBoard();
  }
}

function resetBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
    squares[i].classList.remove('x');
    squares[i].classList.remove('o');
  }
  currentPlayer = 'x';
}