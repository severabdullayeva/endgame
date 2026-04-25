import React from "react";
import styles from "./TacticsCard.module.css";

const TacticsCard = ({ data, onSelect, activeIndex }) => {
    return (
        <div className={styles.grid}>
            {data.map((tactic, i) => (
                <div
                    key={i}
                    className={`${styles.card} ${activeIndex === i ? styles.active : ""}`}
                    onClick={() => onSelect(tactic, i)}
                >
                    <div className={styles.imageWrapper}>
                        <img src={tactic.image} alt={tactic.title} />
                    </div>

                    <div className={styles.content}>
                        <h3>{tactic.title}</h3>
                        <p>{tactic.description}</p>
                    </div>

                    <div className={styles.hint}>
                        <span>Click to explore</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TacticsCard;