import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className={styles.footerGap}>
            <div className='container'>                
                
                <div className='row'>
                    <div className={styles.footerCol}>
                        <h6>Chess Labyrinth</h6>
                        <p>A place where strategy meets creativity.</p>
                    </div>
                    <div className={`${styles.footerCol} ${styles.footerCenter}`}>
                        <h6>Quick Links</h6>
                        <ul className={styles.link}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/play'>Play</Link>
                            </li>
                            <li>
                                <Link to='/quiz'>Quiz</Link>
                            </li>
                            <li>
                                <Link to='/lessons'>Lessons</Link>
                            </li>
                            <li>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.footerCol} ${styles.footerRight}`}>
                        <h6>Contact</h6>
                        <p>Baku, Azerbaijan</p>
                        <p>+994 55 555 00 00</p>

                    </div>

                    <div className={styles.footerCol}>
                        <h6>Join Our Chess Community</h6>
                        <p>Get tips, strategies, and the latest updates.</p>
                        <form action="" onSubmit={(e) => e.preventDefault()} >
                            <div className={styles.input}>
                                <input type="email" placeholder='Email' />
                                <Link to="/contact" className={styles.button}>
                                    Subscribe
                                </Link>
                            </div>
                        </form>
                    </div>

                </div>
                <div className={styles.borderBottom}></div>
                <div className={`row ${styles.footerTop}`}>
                    <div className={`${styles.footerCol} ${styles.bottomItem}`}>
                        <p>© 2026 Chess Labyrinth</p>
                    </div>
                    <div className={`${styles.footerCol} ${styles.bottomItem} ${styles.bottomItemRight}`}>

                        <Link><FaFacebookF /></Link>
                        <Link><FaInstagram /></Link>
                        <Link><FaTwitter /></Link>
                        <Link><FaYoutube /></Link>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer