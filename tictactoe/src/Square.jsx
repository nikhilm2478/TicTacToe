import { useState } from "react";
import styles from "./index.css"

export default function Square({ xIsNext, value, onSquareClick, style }) {
  return (
    <>
      <button class="shadow-2xl h-24 w-24 bg-amber-300" onClick={onSquareClick} style={style}>
        {value}
      </button>
    </>
  );
}

//h-10 px-5 text-black-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-red-800

