import React from "react";

import styles from './Summary.module.css'

const Summary = ({ data }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.summaryTitle}>Quick Summary</h3>

      {data.map((t, i) => (
        <div key={i} className={styles.item}>
          <b>{t.title}</b> → <span>{t.description}</span>
        </div>
      ))}
    </div>
  );
};


export default Summary;