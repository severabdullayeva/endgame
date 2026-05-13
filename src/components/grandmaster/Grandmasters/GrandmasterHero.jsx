import React from 'react'

import styles from './GrandmasterHero.module.css'

import imgHero from '../../../assets/grandmasterhero/grandmaster-header.jpg'

const GrandmasterHeader = () => {
  return (

    <div className={styles.wrapper}>

      <img className={styles.imageBox} src={imgHero} alt="Grandmasters hero" />


      <div className={styles.text}>
        <h1>Grandmasters</h1>
        <p>The strongest chess players in the world</p>

        <button className={styles.btn}
          onClick={() => {
            document.getElementById("grandmasters")?.scrollIntoView({
              behavior: "smooth"
            })
          }}
        >
          View Grandmasters
        </button>
      </div>


    </div>

  )
}

export default GrandmasterHeader