import React from "react";

import styles from './ScorePanel.module.css'

import { FaChessKing, FaBullseye } from "react-icons/fa";

const ScorePanel = ({ score, total }) => {
    const percent = total
        ? Math.round((score / total) * 100)
        : 0;
    return (
        <div className={styles.score}>
            <p> <FaChessKing /> Score: {score}</p>
            <p>Total: {total}</p>
            <p> <FaBullseye /> Accuracy: {percent}%</p>

        </div>
    );
};

export default ScorePanel;

