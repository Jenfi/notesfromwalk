import React, { useState } from 'react'

import './styling/game.css'

export const App = () => {
  const [won, setWon] = useState(false)

  // array with all numbers. Below is the winning order
  const game = [
    { number: 1 }, //index 0
    { number: 2 }, //index 1
    { number: 3 }, //index 2
    { number: 4 }, //index 3
    { number: 5 }, //index 4
    { number: 6 }, //index 5
    { number: 7 }, //index 6
    { number: 8 }, //index 7
    { number: 9 }, //index 8
    { number: 10 }, //index 9
    { number: 11 }, //index 10
    { number: 12 }, //index 11
    { number: 13 }, //index 12
    { number: 14 }, //index 13
    { number: 0 }, //index 14
  ]

  const newGame = [
    { number: 1 }, //index 0
    { number: 2 }, //index 1
    { number: 3 }, //index 2
    { number: 4 }, //index 3
    { number: 5 }, //index 4
    { number: 6 }, //index 5
    { number: 7 }, //index 6
    { number: 8 }, //index 7
    { number: 9 }, //index 8
    { number: 10 }, //index 9
    { number: 11 }, //index 10
    { number: 12 }, //index 11
    { number: 13 }, //index 12
    { number: 14 }, //index 13
    { number: 0 }, //index 14
  ]
  // Returns randomized order of game-array
  const randomizer = (arr) => {
    let i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j]
      arr[j] = temp;
    }
    return arr;
  }

  const [bricks, setBricks] = useState(randomizer(game))

  //Button that randomly shuffles the order of the  objects in the game array
  const handleShuffle = () => {
    return randomizer(game)
  }



  const handleMove = () => {
    // a function that handles the move of the numbers. Splice or similare? Many if-statements...?
  }

  // if game === winningResult setWon(true) return "You have won!!"
  // Make an array that is there just to compare with, to see if won.


  return (
    <main className="main-container">
      <div className="game-board">
        {game.map((brick) => (
          <div
            className={brick.number !== 0
              ? "game-brick"
              : "no-brick"}
            key={brick.number}>
            {brick.number !== 0
              ? <p>{brick.number}</p>
              : <p></p>}
          </div>
        ))}
      </div>
      <button
        className="shuffle-button"
        type="button"
        onClick={() => setBricks(randomizer(newGame))}>
        SLUMPA
        </button>
    </main >
  )
}