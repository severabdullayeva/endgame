import React from 'react'

import styles from './GrandmasterGrid.module.css'

import GrandmasterCard from './GrandmasterCard'




const GrandmasterGrid = ({ data, setSelectedGM, toggleFavorite, favorites }) => {
  return (
    <div className={styles.grid}>
      {data.map((gm) => (
        <GrandmasterCard
          key={gm.id}
          gm={gm}
          onClick={() => setSelectedGM(gm)}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some(f => f.id === gm.id)}

        />
      ))

      }
    </div>
  )
}

export default GrandmasterGrid