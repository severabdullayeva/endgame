import React from 'react'

import styles from "./QuizHero.module.css"

import heroImg from '../../../assets/practic/quiz-header.png'

const QuizHero = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.heroImg} src={heroImg} alt="" />

            <div className={styles.text}>


                <h1>Think Like a Grandmaster</h1>
                <p>Test your chess knowledge and improve your strategy</p>
                <button className={styles.btn}
                    onClick={() => {
                        document.getElementById("practice")?.scrollIntoView({
                            behavior: "smooth"
                        })
                    }}
                >
                    Start Quiz
                </button>
            </div>


        </div>
    )
}

export default QuizHero