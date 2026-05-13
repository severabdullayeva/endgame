import React, { useState } from 'react'

import styles from "./Quiz.module.css"

import PuzzleBox from "../components/quiz/PuzzleBox"
import ScorePanel from '../components/quiz/ScorePanel';

import StartScreen from '../components/quiz/StartScreen';
import QuizHero from '../components/quiz/QuizHero/QuizHero';

const samplePuzzles = [
  {
    fen: "rnb1kbnr/pppp1ppp/8/4p2q/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 1 3",
    question: "White to move. Find the best attacking move.",
    options: ["Qh5+", "Nf7+", "Re1"],
    correct: "Qh5+",
  },

  {
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 3",
    question: "White to move. Which move creates a winning fork?",
    options: ["Be3", "Nc7+", "h3"],
    correct: "Nc7+",
  },

  {
    fen: "3rk3/8/8/8/8/8/6K1/3Q4 w - - 0 1",
    question: "White to move. Find the decisive queen invasion.",
    options: ["Qd8+", "Kg2", "a3"],
    correct: "Qd8+",
  },

  {
    fen: "rnbqkbnr/pppppppp/8/6B1/8/8/PPPPPPPP/RN1QKBNR w KQkq - 0 1",
    question: "White to move. Which move creates a pin on the knight?",
    options: ["Bg5", "h4", "Ke2"],
    correct: "Bg5",
  },
];



const Quiz = () => {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);


  return (
    <main>

      <section className={styles.quizHero}>
        <div className='container'>
          <QuizHero />
        </div>
      </section>
      <section id='practice' className='section-lg'>
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.left}>

              <PuzzleBox
                puzzles={samplePuzzles}
                score={score}
                setScore={setScore}
                index={index}
                setIndex={setIndex}

              />

            </div>


            <aside className={styles.right}>
              <div className={styles.rightScore}>
                <ScorePanel
                  score={score}
                  total={samplePuzzles.length}
                />
              </div>

            </aside>
          </div>
        </div>

      </section>

    </main>

  );
};

export default Quiz