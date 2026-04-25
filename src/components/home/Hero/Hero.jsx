import React from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'

import { FaLongArrowAltDown } from "react-icons/fa";



const Hero = () => {
  const hero = ["king", "queen", "bishop", "rook", "knight", "pawn"]

  return (
    <header className={styles.hero}>
      <div className='container'>
        
        <div className={styles.line}></div>
        <div className={styles.heroRow}>

          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Endgame</h1>
            <p>Enter the world of strategy and challenge your mind.</p>
            <Link to="/contact" className="btn">Request a Quote</Link>
          </div>

          <div className={styles.heroPieces}>
            {hero.map((piece, i) => (
              <div
                className={styles.pieceWrapper}
                key={i}
                style={{ animationDelay: `${i * 1.2}s` }}
              >
                <img src={`/homeImg/hero/${piece}-white.png`} className={styles.white} alt={piece} />
                <img src={`/homeImg/hero/${piece}.png`} className={styles.black} alt={piece} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.lineRight}></div>
      </div>
      <div className={styles.scrollFloat}
        onClick={() => {
          document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <div className={styles.scrollLine}></div>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollArrow}>
          <FaLongArrowAltDown />

        </div>
      </div>



    </header>
  )
}

export default Hero