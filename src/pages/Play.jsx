import React, { useState } from 'react'

import useChessGame from '../hooks/useChessGame'
import useTimer from '../hooks/useTimer'

import PlayHero from '../features/Playhero/PlayHero'

import Board from '../features/Play/Board'
import GameSidebar from '../features/GameSidebar/GameSidebar'
import StartGame from '../features/StartGame/StartGame'

import stylesPlay from './Play.module.css'

const Play = () => {

  const game = useChessGame()
  const [isPlaying, setIsPlaying] = useState(false)

  const timer = useTimer(game.currentTurn, isPlaying)

  const handleMove = (from, to) => {
    if (!isPlaying || timer.gameOver) return false;
    return game.makeMove(from, to);
  };

  const handleRestart = () => {
    game.resetGame();
    timer.resetTimer();
    setIsPlaying(false);
  }

  return (
    <main className={stylesPlay.playContainer}>
      <section className='container'>
        <div className={stylesPlay.sectionPlay}>
          <PlayHero />
        </div>
      </section>

      <section id='play'>

        <div className='container'>
          <div className={`section-lg ${stylesPlay.grid}`}>
            <div className={stylesPlay.board}>
              <Board
                position={game.position}
                makeMove={handleMove}
              />
            </div>

            <div className={stylesPlay.sidebar}>
              <GameSidebar
                game={game}
                timer={timer}
                onRestart={handleRestart}
                isPlaying={isPlaying}
                onStart={() => setIsPlaying(true)}
              />
              {!isPlaying && (
                <div className={stylesPlay.overlay}>
                  <StartGame onStart={() => setIsPlaying(true)} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default Play