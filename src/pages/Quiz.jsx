import React, { useState } from 'react'

import styles from "./Quiz.module.css"

import PuzzleBox from "../components/quiz/PuzzleBox"
import ScorePanel from '../components/quiz/ScorePanel';

import StartScreen from '../components/quiz/StartScreen';
import QuizHero from '../components/quiz/QuizHero/QuizHero';

import Footer from "../components/Footer/Footer"

const samplePuzzles = [
  {
    question: "White to move. Best move?",
    options: ["Qh5+", "Nf7+", "Re1"],
    correct: "Qh5+",
  },
  {
    question: "Find the fork tactic.",
    options: ["Be3", "Nc7+", "h3"],
    correct: "Nc7+",
  },
  {
    question: "Best winning move?",
    options: ["Qd8+", "Kg2", "a3"],
    correct: "Qd8+",
  },
  {
    question: "Spot the pin idea.",
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
            <ScorePanel
              score={score}
              total={samplePuzzles.length}
            />

          </aside>
        </div>
      </div>

      <Footer />

    </main>

  );
};

export default Quiz