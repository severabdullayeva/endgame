import React from "react";
import styles from "./BackgroundPieces.module.css";

const BackgroundPieces = () => {
  return (
    <div className={styles.bg}>
      <div className={`${styles.piece} ${styles.p1}`}>♟</div>
      <div className={`${styles.piece} ${styles.p2}`}>♞</div>
      <div className={`${styles.piece} ${styles.p3}`}>♜</div>
      <div className={`${styles.piece} ${styles.p4}`}>♛</div>
    </div>
  );
};

export default BackgroundPieces;