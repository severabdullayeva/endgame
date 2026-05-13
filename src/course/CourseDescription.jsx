import React from 'react'
import styles from './CourseDescription.module.css'

const CourseDescription = () => {
    return (
        <div className={styles.courseDescription}>
            <div className={styles.left}>
                <span className={styles.tag}>
                    Chess Fundamentals
                </span>

                <h2>
                    Master Chess Tactics Step by Step
                </h2>

                <p>
                    This course helps beginners improve their tactical vision,
                    understand common patterns, and make stronger decisions
                    during real games.
                </p>

                <p>
                    You will learn forks, pins, skewers, discovered attacks,
                    checkmate patterns, and practical puzzle-solving techniques.
                </p>
            </div>

            <div className={styles.points}>

                <div className={styles.point}>
                    ♟ Beginner friendly lessons
                </div>

                <div className={styles.point}>
                    ♞ Real tactical examples
                </div>

                <div className={styles.point}>
                    ♜ Interactive practice puzzles
                </div>

                <div className={styles.point}>
                    ♛ Self-paced learning
                </div>

            </div>

        </div>
    )
}

export default CourseDescription