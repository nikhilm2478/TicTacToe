import { useState } from "react";

export default function Square({ xIsNext, value, onSquareClick, style }) {
  return (
    <>
      <button className="square" onClick={onSquareClick} style={style}>
        {value}
      </button>
    </>
  );
}


