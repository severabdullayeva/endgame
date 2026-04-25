import React from 'react'
import styles from '../LessonHero/LessonHero.module.css'
import heroImg from '../../../assets/lesson/lesson-hero.png'

const LessonHero = () => {
    return (


        <div className={styles.wrapper}>

            <div className={styles.text}>
                <h1>Learn Chess the Smart Way</h1>
                <p>From basic moves to advanced strategies — improve your game with guided lessons.</p>
                <button className={styles.btn}>Begin Your Journey</button>
            </div>

            <div className={styles.heroImg}>
                <img src={heroImg} alt="img" />
            </div>

        </div>


    )
}

export default LessonHero