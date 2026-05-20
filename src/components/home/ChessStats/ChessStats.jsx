import React, { useState, useEffect } from 'react'
import styles from './ChessStats.module.css'


const statsData = [
    { label: "Games Played", key: "games" },
    { label: "Puzzles", key: "puzzles" },
    { label: "Grandmasters", key: "grandmasters" },
    { label: "Lessons", key: "lessons" },
]

const ChessStats = () => {

    const [stats, setStats] = useState({
        games: 0,
        puzzles: 0,
        grandmasters: 0,
        lessons: 0
    })

    useEffect(() => {
        const interval = setInterval(() => {

            setStats(prev => {
                const newStats = {
                    games: Math.min(prev.games + 20, 1000),
                    puzzles: Math.min(prev.puzzles + 20, 1200),
                    grandmasters: Math.min(prev.grandmasters + 5, 250),
                    lessons: Math.min(prev.lessons + 10, 300)
                }

                if (
                    newStats.games === 1000 &&
                    newStats.puzzles === 1200 &&
                    newStats.grandmasters === 250 &&
                    newStats.lessons === 300

                ) {
                    clearInterval(interval)
                }

                return newStats
            })


        }, 100);
        return () => clearInterval(interval)
    }, [])

    return (
        <section  id='next-section' className={`section-lg  ${styles.sectionStats}`}>
            <div className='container'>

                <div className={styles.statsWrapper}>

                    {statsData.map(stat => (
                        <div key={stat.key} className={styles.statCard}>
                            <h3>{stat.label}</h3>
                            <span>{stats[stat.key]} +</span>
                        </div>
                    ))

                    }


                </div>

            </div>
        </section>
    )
}

export default ChessStats