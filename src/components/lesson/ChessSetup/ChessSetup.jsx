import React from 'react'
import styles from './ChessSetup.module.css'
import { Chessboard } from 'react-chessboard'

const pieces = [
    { name: "King", text: "e1 / e8" },
    { name: "Queen", text: "d1 / d8" },
    { name: "Rooks", text: "a1, h1 / a8, h8" },
    { name: "Bishops", text: "c1, f1 / c8, f8" },
    { name: "Knights", text: "b1, g1 / b8, g8" },
    { name: "Pawns", text: "second rank" },
];

const ChessSetup = () => {
    
    return (
        <div>
            <div className={styles.lessonHeader}>
                <h1 className={styles.title}>
                    How to Set Up a Chessboard
                </h1>

                <p className={styles.description}>
                    Learn how all chess pieces are placed on the board before a game starts.
                </p>
            </div>
            <div className={styles.container}>
                <div className={styles.boardContainer}>
                    <Chessboard 
                  
                    arePiecesDraggable={false} />
                </div>

                <div className={styles.piecesInfo}>
                    {pieces.map((p, i) => (
                        <div key={i} className={styles.pieceCard}>
                            <h3>{p.name}</h3>
                            <p>{p.text}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ChessSetup