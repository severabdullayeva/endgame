import React, { useState } from 'react'
import styles from './PieceCard.module.css'








import { ChevronDown } from "lucide-react";



const PieceCard = ({ title, img, description, chess, gif }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`${styles.card} ${open ? styles.open : ""}`}>


            <div className={styles.topSection}>
                <div className={styles.imageBox}>
                    <img src={img} alt={title} />
                    <div className={styles.overlay}>
                        <span className={styles.badge}>Piece</span>
                        <h3 className={styles.cardTitle}>{title}</h3>
                        <button className={styles.routeBtn}>Start Learning</button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.arrow}
                        onClick={() => setOpen(!open)}>
                        <span className={styles.level}>Beginner</span>
                        <ChevronDown className={`${styles.down} ${open ? styles.rotate : ""}`} />
                    </div>
                </div>
            </div>


            <div className={styles.expand}>
                <p>{description}</p>

                <div className={styles.gifWrapper}>
                    <img className={styles.gif} src={gif} alt={title} />

                    <div className={styles.overlayGif}></div>
                </div>

             
            </div>


        </div>
    )
}

export default PieceCard