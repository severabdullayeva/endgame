import React, { useState } from 'react'
import styles from './PieceCard.module.css'

import ChessBoard from './ChessBoard';



import { ChevronDown } from "lucide-react";

const PieceCard = ({ title, img, description, chess }) => {
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
                        <ChevronDown className={open ? styles.rotate : ""} />
                    </div>
                </div>
            </div>


            <div className={styles.expand}>
                <p>{description}</p>
                <div>
                    <ChessBoard piece={chess} />
                </div>
            </div>
        </div>
    )
}

export default PieceCard