import React from 'react'
import styles from './Contact.module.css'
import ContactHero from '../components/contact/ContactHero/ContactHero'
import ContactInfo from '../components/contact/ContactInfo/ContactInfo'
import ContactForm from '../components/contact/ContactForm/ContactForm'
import OfficeMap from '../components/contact/OfficeMap/OfficeMap'

import Footer from '../components/Footer/Footer'

const Contact = () => {
  return (
    <main>
      <section className={styles.sectionHero}>
        <div className="container">
          <div className={styles.contactRow}>

            <div className={styles.contactCol}>
              <ContactHero />
            </div>
            <div className={styles.contactCol}>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionFormMap}>
        <div className='container'>
          <div className={`${styles.contactRow} ${styles.contactCard}`}>

            <div className={styles.contactCol}>
              <ContactForm />
            </div>
            <div className={styles.contactCol}>
              <OfficeMap />
            </div>
          </div>
        </div >

      </section >
    
        <Footer />
      
    </main>
  )
}

export default Contact