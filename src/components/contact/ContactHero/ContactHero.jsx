import React from 'react'
import styles from './ContactHero.module.css'
import contactImg from '../../../assets/contactImg/contactHero.png'

import {Link} from "react-router-dom"

const ContactHero = () => {
    return (
        <div className={styles.contactHeroSection}>
            <h1 data-aos="fade-down">Talk to Our Chess Masters</h1>

            <div className={styles.wrapper}>

                <div className={styles.image} data-aos="fade-right">
                    <img src={contactImg} alt="contact" />
                </div>
                <div className={styles.text} data-aos="fade-left" data-aos-delay="150">

                    <p>We are ready to help you with strategy, design and ideas.</p>

                    <div className={styles.buttons}>
                        <Link to="/" className={styles.primaryBtn}>Home</Link>
                        <Link to="/contact" className={styles.secondaryBtn}>Contact</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactHero