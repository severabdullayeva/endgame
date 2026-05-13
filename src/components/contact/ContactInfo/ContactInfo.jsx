import React from 'react'
import styles from '../ContactInfo/ContactInfo.module.css'
import { ChessKnight, MapPin, Mail, Phone } from "lucide-react"

const ContactInfo = () => {
    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <div className={styles.iconBox}>
                    <ChessKnight className={styles.icon} />
                </div>
                <div className={styles.headerText}>
                    <h3 className={styles.heading}>Get in Touch</h3>
                    <p className={styles.subText}>
                        We’re here to help you improve your chess journey.
                    </p>
                </div>
            </div>

            <div className={styles.listParent}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.itemIcon}>
                            <MapPin />
                        </div>
                        <div className={styles.positionText}>
                            <b className={styles.textTitle}>Office Location</b>
                            <p>28 Azadlıq Prospekti, Bakı, AZ1000, Azərbaycan</p>
                        </div>
                    </li>

                    <li className={styles.item}>
                        <div className={styles.itemIcon} >
                            <Mail />
                        </div>
                        <div>
                            <b className={styles.textTitle}>Email Support</b>
                            <p>support@endgame-studio.com</p>
                        </div>
                    </li>

                    <li className={styles.item}>
                        <div className={styles.itemIcon} >
                            <Phone />
                        </div>
                        <div>
                            <b className={styles.textTitle}>Call Us</b>
                            <p>+994 55 555 00 00</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContactInfo