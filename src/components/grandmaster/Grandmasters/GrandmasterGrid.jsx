import React from 'react'

import styles from './GrandmasterGrid.module.css'

import GrandmasterCard from './GrandmasterCard'




const GrandmasterGrid = ({data, setSelectedGM}) => {
  return (
    <div className={styles.grid}>
        {data.map((gm)=> (
            <GrandmasterCard 
            key={gm.id} 
            gm={gm}
            onClick={() => setSelectedGM(gm)}
            
            />
        ))

        }
    </div>
  )
}

export default GrandmasterGrid