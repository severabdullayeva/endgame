import React from 'react';
import styles from './Features.module.css';

import learn from "../../../assets/homeImg/features/learn.png"
import play from "../../../assets/homeImg/features/play.png"
import quiz from "../../../assets/homeImg/features/quiz.png"
import grandmasterOne from '../../../assets/grandmaster/shakhriyar-mamedyarov.png';
import grandmasterTwo from '../../../assets/grandmaster/teimour-radjabov.png';
import grandmasterThree from '../../../assets/grandmaster/magnus-carlsen.png';
import grandmasterFour from '../../../assets/grandmaster/hikaru-nakamura.png';




const Features = () => {
    const features = [
        {
            name: "Play Chess",
            text: "Start a game and test your skills.",
            img: play
        },
        {
            name: "Learn Chess",
            text: "Understand rules and strategies.",
            img: learn
        },
        {
            name: "Chess Quiz",
            text: "Test your knowledge.",
            img: quiz
        },
        {
            name: "Grandmasters",
            text: "Explore legendary chess players and their strategies.",
            type: "grandmaster",
            img: [grandmasterOne, grandmasterTwo, grandmasterThree, grandmasterFour]
        }
    ];

    return (
        <section className={`section-lg ${styles.featureSection}`} id='next-section'>

            <div className="container">
                <div className={styles.title}>
                    <h1>Your Chess Journey Starts Here</h1>
                    <p>Play, learn, and challenge yourself through chess.</p>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <div key={index}>
                            <div className={`${styles.featureCard} ${styles.card}`}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className={styles.cardsContainer}>
                                    {feature.type === "grandmaster" ? (
                                        <div className={styles.grandmasterImages}>
                                            {feature.img.map((img, i) => (
                                                <img key={i} src={img} alt="grandmaster" />
                                            ))

                                            }
                                        </div>
                                    ) : (
                                        <img src={feature.img} alt={feature.name} className={styles.featureImage} />
                                    )}
                                    <div className={styles.featureContent}>
                                        <div className={styles.text}>
                                            <h3>{feature.name}</h3>
                                            <p>{feature.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Features;






