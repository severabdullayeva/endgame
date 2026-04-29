import React from 'react'

import styles from './Play.module.css'

import Board from "../features/Play/Board"

import useChessGame from '../hooks/useChessGame'


import GameSidebar from '../features/GameSidebar/GameSidebar'

import StartPlay from '../features/StartPlay/StartPlay'


const Play = () => {
  const gameData = useChessGame();


  return (
    <section className={styles.playContainer} style={{ textAlign: "center", padding: "20px" }}>


      <div className='container'>
        <div className='row'>

          <div className={styles.board}>
            <Board
              position={gameData.position}
              makeMove={gameData.makeMove}
            />
          </div>

          <div className={styles.sidebar}>
            <GameSidebar
              turn={gameData.currentTurn}
              isCheck={gameData.isCheck}
              history={gameData.history}
            />
          </div>

          <div>
          
          </div>
        </div>

      </div>
    </section>
  );
}

export default Play