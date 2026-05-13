import React, { useState } from 'react'
import styles from './Grandmasters.module.css'

import GrandmasterHero from '../components/grandmaster/Grandmasters/GrandmasterHero'
import GrandmasterGrid from '../components/grandmaster/Grandmasters/GrandmasterGrid'
import grandmasters from '../components/data/grandmasters'



const Grandmasters = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [search, setSearch] = useState("");

  const [selectedGM, setSelectedGM] = useState(null);

  const filtered = grandmasters
    .filter((gm) => {
      if (selectedFilter === "all") return true
      return gm.country === selectedFilter;
    })
    .filter((gm) =>
      gm.name?.toLowerCase().includes(search.toLowerCase())
    )




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
              data={filtered}
              setSelectedGM={setSelectedGM}
            />

          ) : (
            <p className={styles.emptyState}>No grandmasters matching your search were found.</p>
          )

          }
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