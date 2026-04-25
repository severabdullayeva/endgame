import React from 'react'

import styles from "./QuizHero.module.css"

const QuizHero = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>

                <h1>Think Like a Grandmaster</h1>
                <p>Test your chess knowledge and improve your strategy</p>
                <button className={styles.btn}>Start Quiz</button>
            </div>

        </div>
    )
}

export default QuizHero