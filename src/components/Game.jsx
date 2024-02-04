import React, { useState } from 'react';
import calculateWinner from './helper';
import Board from './Board';
import './Game.css';

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);


  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    //определить был ли клик или игра закончена чтобы на ячейку нельзя было нажать
    if (winner || boardCopy[index]) return;
    //определить чей ход
    boardCopy[index] = xIsNext ? 'X' : '0';
    //обновить состояние
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const newGame = () => {
    setBoard((Array(9).fill(null)))
    setXIsNext(true)
  }

  const startNewGame = () =>{
    return (
      <button className='start__btn' onClick={newGame}>
        Новая игра
      </button>
    )
  }
  const gameInfo = () => {
    let result;
    
    if (!winner) {
       result = 'Сейчас ходит ' + (xIsNext ? 'X' : 'O');
    } else {
       result = 'Победитель ' + winner;
    }
    if (board.every(item => item !== null)) {
       result = 'Ничья';
    }
    return result;
}



  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handleClick}/>
      <p className='game__info'>
        {gameInfo()}
      </p>
     
    </div>
  );
}

