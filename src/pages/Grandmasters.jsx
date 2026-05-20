import React, { useState, useEffect } from 'react'
import styles from './Grandmasters.module.css'

import GrandmasterHero from '../components/grandmaster/Grandmasters/GrandmasterHero'
import GrandmasterGrid from '../components/grandmaster/Grandmasters/GrandmasterGrid'
import grandmasters from '../components/data/grandmasters'



const Grandmasters = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [search, setSearch] = useState("");

  const [selectedGM, setSelectedGM] = useState(null);

  const [showAll, setShowAll] = useState(false)

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites")

    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  const [showFavorites, setShowFavorites] = useState(false)

  const filtered = grandmasters
    .filter((gm) => {
      if (selectedFilter === "all") return true
      return gm.country === selectedFilter;
    })
    .filter((gm) =>
      gm.name?.toLowerCase().includes(search.toLowerCase())
    )
    .filter((gm) => {
      if (!showFavorites) return true
      return favorites.some(f => f.id === gm.id)
    })

  const toggleFavorite = (gm) => {
    setFavorites((prev) => {
      const exists = prev.find(item => item.id === gm.id)

      if (exists) {
        return prev.filter(item => item.id !== gm.id)
      } else {
        return [...prev, gm]
      }
    })
  }
  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  return (
    <main>
      <section className={`section-lg ${styles.sectionMaster}`}>
        <div className="container">

          <GrandmasterHero />

        </div>
      </section>

      <section id='grandmasters' className={styles.filterSection}>
        <div className={styles.filterBar}>

          <button
            className={`${styles.btn} ${selectedFilter === "all" ? styles.active : ""}`}
            onClick={() => setSelectedFilter("all")}
          >
            All
          </button>

          <button
            className={`${styles.btn} ${showFavorites ? styles.active : ""}`}
            onClick={() => setShowFavorites(!showFavorites)}
          >
            ⭐ Favorites
          </button>

          <select
            className={styles.select}
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Azerbaijan">Azerbaijan 🇦🇿</option>
            <option value="USA">USA 🇺🇸</option>
            <option value="Russia">Russia</option>
            <option value="Netherlands">Netherlands</option>
            <option value="China">China</option>
            <option value="France">France</option>
            <option value="Norway">Norway</option>
          </select>

          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
      </section>

      <section className={styles.gridSection}>
        <div className='container'>
          {filtered.length > 0 ? (
            <GrandmasterGrid
              data={filtered.slice(0, showAll ? filtered.length : 6)}
              setSelectedGM={setSelectedGM}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />

          ) : (
            <p className={styles.emptyState}>No grandmasters matching your search were found.</p>
          )

          }
          <button className={styles.button} onClick={() => setShowAll(!showAll)}>
            <span className={styles.text}>
              {showAll ? "Show Less" : "Show More"}
            </span>

            <svg className={styles.arrow} viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
          </button>
        </div>


      </section>

      {selectedGM && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedGM(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

            <h2>{selectedGM.name}</h2>

            <p>{selectedGM.country}</p>

            <p>{selectedGM.rating}</p>

            <p>{selectedGM.fullBio}</p>

            <ul>
              {selectedGM.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button onClick={() => setSelectedGM(null)}>
              Close
            </button>

          </div>
        </div>
      )}


    </main>
  )
}

export default Grandmasters