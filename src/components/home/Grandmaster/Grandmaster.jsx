import React from 'react'

import styles from './Grandmaster.module.css'

import grandmasterOne from '../../../assets/grandmaster/shakhriyar-mamedyarov.png';
import grandmasterTwo from '../../../assets/grandmaster/teimour-radjabov.png';
import grandmasterThree from '../../../assets/grandmaster/magnus-carlsen.png';
import grandmasterFour from '../../../assets/grandmaster/hikaru-nakamura.png';

const grandmasters = [
    {
        id: 1,
        name: "Shakhriyar Mamedyarov",
        country: "Azerbaijan",
        image: grandmasterOne,
        rating: 2750,
        shortBio: "Aggressive and creative attacking player."
    },
    {
        id: 2,
        name: "Teimour Radjabov",
        country: "Azerbaijan",
        image: grandmasterTwo,
        rating: 2740,
        shortBio: "Strategic player with strong defensive skills."
    },
    {
        id: 3,
        name: "Magnus Carlsen",
        country: "Norway",
        image: grandmasterThree,
        rating: 2830,
        shortBio: "Former world champion known for endgame mastery."
    },
    {
        id: 4,
        name: "Hikaru Nakamura",
        country: "USA",
        image: grandmasterFour,
        rating: 2780,
        shortBio: "Blitz specialist and popular chess streamer."
    }
];


const Grandmaster = () => {
    return (
        <section className={`section-lg ${styles.grandmasterSection}`}>
            <div className="container">
                <div className={styles.header}>
                    <h1>Grandmaster</h1>
                    <p className={styles.subtitle}>Featured players</p>
                </div>


                <div className={styles.grid} >
                    {grandmasters.map((gm, index) => (
                        <div key={index} className={styles.card}
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                        >
                            <div className={styles.cardHeader}>
                                <h3>{gm.name}</h3>
                                <p>{gm.country}</p>
                            </div>
                            <div className={styles.imgWrapper}>
                                <img src={gm.image} alt="" className={styles.image} />
                            </div>
                            <div className={styles.cardBody}>
                                <p>{gm.rating}</p>
                                <p>{gm.shortBio}</p>
                            </div>
                        </div>
                    ))

                    }
                </div>


            </div>
        </section>
    )
}

export default Grandmaster