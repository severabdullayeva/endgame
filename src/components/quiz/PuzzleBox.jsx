import React, { useState } from "react";
import styles from "./PuzzleBox.module.css";

import Timer from "./Timer";

const PuzzleBox = ({ puzzles, score, setScore, index, setIndex }) => {

  // user hansı cavabı seçdi
  const [selected, setSelected] = useState(null);

  // cavab doğrudur ya yox
  const [result, setResult] = useState(null);

  const [started, setStarted] = useState(false);

  // əgər data yoxdursa
  if (!puzzles || puzzles.length === 0) {
    return <p>No puzzles</p>;
  }

  const canGoNext = selected !== null;

  const isFinished = index >= puzzles.length;
  if (isFinished) {
    return (
      <div className={styles.box}>
        <h2>🏆 Finished!</h2>
        <p>You completed all puzzles!</p>
        <p>Score: {score} / {puzzles.length}</p>


        <button
          className={styles.nextButton}
          onClick={() => {
            setIndex(0);
            setSelected(null);
            setResult(null);
            setScore(0);
            setStarted(false)
          }}
        >
          Restart
        </button>
      </div>
    );
  }

  const current = puzzles[index];

  if (!current) return null



  return (

    <div className={styles.border}>

      {!started && (
        <div className={styles.overlay}>
          <button className={styles.btn} onClick={() => setStarted(true)}>
            
            Start Quiz
          </button>
        </div>
      )}

      <div className={`${styles.box} ${!started ? styles.disabled : ""}`}>


        {/* progress bar */}
        <div className={styles.bar}>
          <div
            className={styles.fill}
            style={{
              width: `${((index + 1) / puzzles.length) * 100}%`
            }}
          />

        </div>

        {/* question number */}
        <div className={`row ${styles.progressRow}`}>
          <p className={styles.progress}>
            Question {index + 1} / {puzzles.length}
          </p>

          {started &&(
             <Timer
             key={index}
             onTimeUp={()=>{
              setSelected("timeout")
              setResult(false)
             }}
             />
             )}

        </div>

        {/* question */}
        <p>{current.question}</p>

        {/* options */}
        <div className={styles.options}>
          {current.options.map((opt, i) => (
            <button
              key={i}
              disabled={!started}
              onClick={() => {
                if (!started || selected) return;

                const isCorrect = opt === current.correct;

                setSelected(opt);
                setResult(isCorrect);

                if (isCorrect) {
                  setScore(prev => prev + 1);
                }
              }}
              className={
                selected === opt
                  ? result
                    ? styles.correct
                    : styles.wrong
                  : ""
              }
            >
              {opt}
            </button>
          ))}
        </div>

        {/* result text */}
        {selected && (
          <p className={result ? styles.correct : styles.wrong}>
            {result ? "✅ Correct!" : "❌ Wrong"}
          </p>
        )}

        {/* next button */}
        {selected && (
          <button
            className={styles.nextButton}
            onClick={() => {
              setSelected(null);
              setResult(null);
              setIndex(prev => prev + 1);
            }}
          >
            Next
          </button>
        )}

      </div>
    </div>
  );
};

export default PuzzleBox;