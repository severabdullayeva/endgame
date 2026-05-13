import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {

    const cards = [
        {
            title: "Experience",
            text: "Designed for players of all levels, our platform helps you learn, practice, and grow in chess step by step.",
            icons: "fa-chess-knight"
        },
        {
            title: "Best Tutors",
            text: "Our instructors are experienced chess players who are passionate about teaching and helping others improve their game.",
            icons: "fa-chess-king"
        },
        {
            title: "Practice",
            text: "Improve your skills by practicing games, solving challenges, and participating in competitions with players from around the world.",
            icons: "fa-chess-bishop"
        }
    ]

    return (
        <section className={`section-lg ${styles.aboutSection}`}>
            <div className='container'>
                <div className={styles.content}>
                    <h1>Discover Endgame</h1>
                    <div className={styles.aboutText}>
                        <p>Welcome to Endgame — where strategy meets creativity.</p>
                        <p>Our platform is designed to help you learn chess step by step, from your first move to advanced strategies.</p>
                        <p>Play real games, practice with challenges, and improve your thinking skills through chess.</p>
                    </div>
                </div>

                <div className={styles.aboutCardGrid}>
                    {cards.map((item, index) => (
                        <div key={index}>
                            <div className={styles.card}
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                            >
                                <div className={styles.wrapper}>
                                    <i className={`fa-regular ${item.icons}`}></i>
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutUs