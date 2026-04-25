import React, { useState } from "react";
import styles from "./TacticsSection.module.css";

import TacticsCard from "./TacticsCard";


import { tacticsData, puzzles } from "../../data/tacticData";

const TacticsSection = () => {
    
    const [activeImage, setActiveImage] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedTactic, setSelectedTactic] = useState(null);



    return (
        <section className={styles.section}>
            <div>
                {/* HEADER */}
                <div className={styles.header}>
                    <h2>Tactics</h2>
                    <p>Learn chess tactics step by step</p>
                </div>

                {/* GRID */}
                <TacticsCard
                    data={tacticsData}
                    onSelect={(tactic, index) => {
                        setSelectedTactic(tactic);
                        setActiveImage(tactic.image);
                        setActiveIndex(index);
                    }}
                />

            </div>

            {/* MODAL */}
            {activeImage && (
                <div className={styles.modal} onClick={() => setActiveImage(null)}>
                    <img src={activeImage} alt="" />
                </div>
            )}

        </section>
    );
};

export default TacticsSection;