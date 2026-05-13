import React from 'react'

import styles from './GrandmasterCard.module.css'

const GrandmasterCard = ({ gm, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.imgWrapper}>
                <img src={gm.image} alt={gm.name} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.info}>
                <h3>{gm.name}</h3>
                <p className={styles.country}>{gm.country}</p>
                <p className={styles.rating}>{gm.rating}</p>
                <p className={styles.bio}>{gm.shortBio}</p>
            </div>
        </div>
    )
}

export default GrandmasterCard