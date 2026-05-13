import React from 'react'
import styles from './Cta.module.css'
import { Link } from 'react-router-dom'

const Cta = ({ title, text, buttonText, link, image }) => {
    return (
        <section className={`section-lg ${styles.cta}`}>
            <div className='container'>
                <div className='row'>

                    <div className={`${styles.ctaCol} ${styles.text}`}>
                        <div className={styles.ctaContent}>
                            <h2>{title}</h2>
                            <p>{text}</p>

                            <Link to={link} className="btn">
                                {buttonText}
                            </Link>

                            <span className={styles.subText}>
                                No signup required • Free to start
                            </span>
                        </div>
                    </div>

                    <div className={styles.ctaCol}>
                        <div className={styles.img}>
                            <img src={image} alt="cta" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Cta