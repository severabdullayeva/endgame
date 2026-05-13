import React from 'react'
import styles from './CourseLessons.module.css'

const lessons = [
    {
        title: "Opening Principles",
        text: "Learn how to control the center and develop pieces correctly."
    },
    {
        title: "Fork Tactics",
        text: "Understand how to attack multiple pieces at once."
    },
    {
        title: "Pins & Skewers",
        text: "Discover tactical patterns that win material."
    },
    {
        title: "Checkmate Patterns",
        text: "Practice common mating ideas used in real games."
    }
]

const CourseLessons = () => {
    return (
        <div className={styles.courseLessons}>

            <div className={styles.top}>
                <span>Course Content</span>

                <h2>Lessons Overview</h2>
            </div>

            <div className={styles.lessonGrid}>

                {lessons.map((lesson, index) => (
                    <div className={styles.lessonCard} key={index}>

                        <div className={styles.number}>
                            0{index + 1}
                        </div>

                        <h3>{lesson.title}</h3>

                        <p>{lesson.text}</p>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default CourseLessons