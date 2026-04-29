import React from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'

import king from "../../../assets/homeImg/hero/king.png"
import kingWhite from "../../../assets/homeImg/hero/king-white.png"

import queen from "../../../assets/homeImg/hero/queen.png"
import queenWhite from "../../../assets/homeImg/hero/queen-white.png"

import bishop from "../../../assets/homeImg/hero/bishop.png"
import bishopWhite from "../../../assets/homeImg/hero/bishop-white.png"

import rook from "../../../assets/homeImg/hero/rook.png"
import rookWhite from "../../../assets/homeImg/hero/rook-white.png"

import knight from "../../../assets/homeImg/hero/knight.png"
import knightWhite from "../../../assets/homeImg/hero/knight-white.png"

import pawn from "../../../assets/homeImg/hero/pawn.png"
import pawnWhite from "../../../assets/homeImg/hero/pawn-white.png"


import { FaLongArrowAltDown } from "react-icons/fa";



const Hero = () => {
  const hero = ["king", "queen", "bishop", "rook", "knight", "pawn"]

  const pieces = {
    king: { black: king, white: kingWhite },
    queen: { black: queen, white: queenWhite },
    bishop: { black: bishop, white: bishopWhite },
    rook: { black: rook, white: rookWhite },
    knight: { black: knight, white: knightWhite },
    pawn: { black: pawn, white: pawnWhite },
  }


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
                <img src={pieces[piece].white} className={styles.white} alt={piece} />
                <img src={pieces[piece].black} className={styles.black} alt={piece} />
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