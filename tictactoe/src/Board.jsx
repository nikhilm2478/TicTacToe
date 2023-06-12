import { useState } from "react";
import Square from "./Square";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

//Game Intro
Swal.fire({
  title: "Login Form",
  html: `<input type="text" id="login" class="swal2-input" placeholder="Phone Number">
  <input type="password" id="password" class="swal2-input" placeholder="Password">`,
  confirmButtonText: "Sign in",
  focusConfirm: false,
  preConfirm: () => {
    const login = Swal.getPopup().querySelector("#login").value;
    const password = Swal.getPopup().querySelector("#password").value;
    if (!login || !password) {
      Swal.showValidationMessage(`Please enter login and password`);
    }
    return { login: login, password: password };
  },
}).then((result) => {
  Swal.fire(
    `
    Login: ${result.value.login}
    Password: ${result.value.password}
  `.trim()
  );
});

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  let w = xIsNext ? "O" : "X";

  if (winner) {
    status = "Winner: " + w;
    Swal.fire({
      title: "Congratulations " + w,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          xIsNext={xIsNext}
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          style={{
            backgroundColor: winner
              ? winner.includes(0)
                ? "gold"
                : "white"
              : "white",
          }}
        />
        <Square
          xIsNext={xIsNext}
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          style={{
            backgroundColor: winner
              ? winner.includes(1)
                ? "gold"
                : "white"
              : "white",
          }}
        />
        <Square
          xIsNext={xIsNext}
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          style={{
            backgroundColor: winner
              ? winner.includes(2)
                ? "gold"
                : "white"
              : "white",
          }}
        />
      </div>
      <div className="board-row">
        <Square
          xIsNext={xIsNext}
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          style={{
            backgroundColor: winner
              ? winner.includes(3)
                ? "gold"
                : "white"
              : "white",
          }}
        />
        <Square
          xIsNext={xIsNext}
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          style={{
            backgroundColor: winner
              ? winner.includes(4)
                ? "gold"
                : "white"
              : "white",
          }}
        />
        <Square
          xIsNext={xIsNext}
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          style={{
            backgroundColor: winner
              ? winner.includes(5)
                ? "gold"
                : "white"
              : "white",
          }}
        />
      </div>
      <div className="board-row">
        <Square
          xIsNext={xIsNext}
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          style={{
            backgroundColor: winner
              ? winner.includes(6)
                ? "gold"
                : "white"
              : "white",
          }}
        />
        <Square
          xIsNext={xIsNext}
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          style={{
            backgroundColor: winner
              ? winner.includes(7)
                ? "gold"
                : "white"
              : "white",
          }}
        />
        <Square
          xIsNext={xIsNext}
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          style={{
            backgroundColor: winner
              ? winner.includes(8)
                ? "gold"
                : "white"
              : "white",
          }}
        />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  return null;
}
