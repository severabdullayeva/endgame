import React from 'react'
import styles from './CourseHero.module.css'

import { Link } from 'react-router-dom'

const CourseHero = () => {
    return (
        <div className={styles.courseHero}>

            <div className={styles.overlay}></div>

            <div className={styles.content}>

                <span className={styles.tag}>
                    Beginner Chess Course
                </span>

                <h1>
                    Improve Your Chess Tactics & Strategy
                </h1>

                <p>
                    Learn essential chess concepts, tactical patterns,
                    and practical ideas through simple step-by-step lessons.
                </p>

                <div className={styles.buttons}>
                    <button
                        onClick={() => {
                            document.getElementById("course")?.scrollIntoView({
                                behavior: "smooth"
                            })
                        }}
                    >Start Learning</button>

                    <Link to="/learn/lessons" className={styles.secondary}>
                        View Lessons
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default CourseHero