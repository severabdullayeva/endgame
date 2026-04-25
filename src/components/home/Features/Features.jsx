import React from 'react';
import styles from './Features.module.css';
const Features = () => {
    const features = [
  {
    name: "Play Chess",
    text: "Start a game and test your skills.",
    img: "play.png"
  },
  {
    name: "Learn Chess",
    text: "Understand rules and strategies.",
    img: "learn.png"
  },
  {
    name: "Chess Quiz",
    text: "Test your knowledge.",
    img: "quiz.png"
  },
  {
    name: "Shop",
    text: "Boards & pieces collection.",
    type: "shop",
    img: ["shop1.png","shop2.png","shop3.png","shop4.png"]
  }
];

    return (
        <section className={styles.featureSection} id='next-section'>
           
            <div className="container">
                <div className={styles.title}>
                    <h1>Your Chess Journey Starts Here</h1>
                    <p>Play, learn, and challenge yourself through chess.</p>
                </div>

                <div className='row'>
                    {features.map((feature,index) => (
                        <div key={index} className={styles.featureCol}>
                            <div className={`${styles.featureCard} ${styles.card}`} 
                            data-aos="fade-up" 
                            data-aos-delay={index * 100}
                            >
                                <div className={styles.cardsContainer}>
                                    {feature.type === "shop" ? (
                                        <div className={styles.shopImages}>
                                            {feature.img.map((img,i)=>(
                                                <img key={i} src={`/homeImg/features/${img}`} alt="shop item" />
                                            ))

                                            }
                                        </div>
                                    ) : (
                                        <img src={`/homeImg/features/${feature.img}`} alt={feature.name} className={styles.featureImage} />
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






