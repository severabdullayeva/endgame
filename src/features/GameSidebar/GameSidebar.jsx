import React from 'react'

import styles from './GameSidebar.module.css'
import useTimer from '../../hooks/useTimer'


const GameSidebar = ({ turn, isCheck, history, isCheckmate, isDraw }) => {
    const timer = useTimer(turn)

    const rows = [];

    history.forEach((move, i) => {
        if (i % 2 === 0) {
            rows.push({
                number: Math.floor(i / 2) + 1,
                white: move,
                black: ""
            });
        } else {
            rows[rows.length - 1].black = move;
        }
    });

    const formatTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return min + ":" + (sec < 10 ? "0" : "") + sec
    }


    return (
        <div className={styles.rightWrapper}>
            <div className={styles.timer}>
                <p>White: {formatTime(timer.whiteTime)}</p>
                <p>Black: {formatTime(timer.blackTime)}</p>
            </div>
            {!isCheckmate && !isDraw && (
                <h3>{turn === "w" ? "White's turn" : "Black's turn"} to move</h3>
            )}
            {isCheck && !isCheckmate && <p>Check</p>}
            <div className={styles.textTitle}>
                <h4>Moves:</h4>
                <div className={styles.whiteBlack}>
                    <span></span>
                    <span className={styles.whiteRight}>White</span>
                    <span>Black</span>
                </div>

                <ul className={styles.moveList}>
                    {rows.map((m, i) => (
                        <li key={i} className={styles.moveItem}>
                            <span>{m.number}.</span><span>{m.white}</span> <span>{m.black}</span>
                        </li>
                    ))

                    }

                </ul>

            </div>
        </div>
    )
}

export default GameSidebar