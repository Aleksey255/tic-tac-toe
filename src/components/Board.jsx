import React from 'react'
import Square from './Square'
import './Board.css'

export default function Board(props) {
  
  return (
    <div className='board'>
      {
        props.squares.map((square,i) => (
          <Square key={i} value={square} onClick={() => props.click(i)}/>
        ))
      }
      
    </div>
  )
}
