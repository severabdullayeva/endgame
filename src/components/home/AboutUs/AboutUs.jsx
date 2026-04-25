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
        <section className={styles.aboutSection}>
            <div className='container'>
                <div className={styles.content}>
                    <h1>About Us</h1>
                    <div className={styles.aboutText}>
                        <p>Welcome to Chess Labyrinth — a place where strategy meets creativity.</p>
                        <p>Here you can play, learn, and challenge yourself through chess. From beginners to advanced players, everyone can improve, explore new tactics, and enjoy the game.</p>
                        <p>Chess is not just a game — it’s a way of thinking.</p>
                    </div>
                </div>

                <div className='row'>
                    {cards.map((item, index) => (
                        <div className={`${styles.aboutCol} ${styles.sectionPadding} `} key={index}>
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