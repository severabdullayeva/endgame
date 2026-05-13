import React from 'react'
import styles from './Contact.module.css'
import ContactHero from '../components/contact/ContactHero/ContactHero'
import ContactInfo from '../components/contact/ContactInfo/ContactInfo'
import ContactForm from '../components/contact/ContactForm/ContactForm'
import OfficeMap from '../components/contact/OfficeMap/OfficeMap'


const Contact = () => {
  return (
    <main>
      <section className={`section-lg ${styles.sectionHero}`}>
        <div className="container">
          <div className={styles.contactGrid}>

            <div className={styles.contactCol}>
              <ContactHero />
            </div>
            <div className={styles.contactCol}>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <section className={`section-lg ${styles.sectionFormMap}`}>
        <div className='container'>
          <div className={`${styles.contactGrid} ${styles.contactCard}`}>

            <ContactForm />

            <OfficeMap />

          </div>
        </div >
      </section >



    </main>
  )
}

export default Contact