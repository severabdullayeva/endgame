import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from "react-icons/fa"

import logo from '../../assets/logo/endgame-logo-footer.png'

const Footer = () => {
    return (
        <footer className={`section-lg ${styles.footerGap}`}>
            <div className='container'>

                <div className='row'>

                    {/* Logo */}
                    <div className={`${styles.footerCol} ${styles.bottom}`}>

                        <div className={styles.top}>

                            <img
                                className={styles.logo}
                                src={logo}
                                alt="Endgame logo"
                            />

                            <h6>Endgame</h6>

                        </div>

                        <p>
                            A place where strategy meets creativity.
                        </p>

                    </div>

                    {/* Links */}
                    <div className={`${styles.footerCol} ${styles.bottom}`}>

                        <h6>Quick Links</h6>

                        <ul className={styles.link}>

                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/play">Play</Link>
                            </li>

                            <li>
                                <Link to="/quiz">Practice</Link>
                            </li>

                            <li>
                                <Link to="/course">Course</Link>
                            </li>

                            <li>
                                <Link to="/lessons">Lessons</Link>
                            </li>

                            <li>
                                <Link to="/grandmaster">Grandmasters</Link>
                            </li>

                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}
                    <div className={`${styles.footerCol} ${styles.bottom}`}>

                        <h6>Contact</h6>

                        <p>Baku, Azerbaijan</p>
                        <p>+994 55 555 00 00</p>

                    </div>

                    {/* Subscribe */}
                    <div className={`${styles.footerCol} ${styles.bottom}`}>

                        <div className={styles.box}>

                            <h6>Join Our Chess Community</h6>

                            <p>
                                Get tips, strategies, and the latest updates.
                            </p>

                        </div>

                        <div className={styles.input}>

                            <input
                                type="email"
                                placeholder="Email"
                            />

                            <Link
                                to="/contact"
                                className={styles.button}
                            >
                                Subscribe
                            </Link>

                        </div>

                    </div>

                </div>

                <div className={styles.borderBottom}></div>

                {/* Bottom */}
                <div className={`row ${styles.footerTop}`}>

                    <div className={styles.bottomItem}>
                        <p>© 2026 Endgame. All rights reserved.</p>
                    </div>

                    <div className={`${styles.bottomItem} ${styles.bottomItemRight}`}>

                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>

                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer