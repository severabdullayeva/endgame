import React from 'react'

import playHero from '../../assets/play/play-hero.jpg'

import styles from './PlayHero.module.css'

const PlayHero = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.playHero}
        src={playHero}
        alt="Chess board"
      />

      <div className={styles.content}>
        <h1>Ready for Your Next Move?</h1>

        <p>
          Focus, plan, and play your best game on the board.
        </p>

        <button className={styles.btn}
          onClick={() => {
            document.getElementById("play")?.scrollIntoView({
              behavior: "smooth"
            })
          }}
>
          Play Game
        </button>
      </div>

    </div >
  )
}

export default PlayHero