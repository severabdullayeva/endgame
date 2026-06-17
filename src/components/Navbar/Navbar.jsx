import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/logo/endgame-logo1.png'

import { Moon, Sun } from 'lucide-react'
import { FaRegUser } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme, setShowLogin }) => {
    const [open, setOpen] = useState(false);
    // burger menu açılıb-bağlanması

    const [learnOpen, setLearnOpen] = useState(false);
    // Learn dropdown açılıb-bağlanması

    const location = useLocation();
    // hazırkı URL-i alır

    const isLearnActive = location.pathname.startsWith('/learn');
    // /learn ilə başlayan səhifələrdə Learn aktiv olur

    return (
        <nav className={styles.navbar}>
            <div className='container'>
                <div className={`${styles.navContent} ${open ? styles.openMenu : ""}`}>

                    {/* logo */}
                    <NavLink to="/" className={styles.top}>
                        <img className={styles.logo} src={logo} alt="Logo" />
                    </NavLink>

                    <ul className={styles.left}>

                        {/* Home link */}
                        <li>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? styles.activeContact : ""
                            }>
                                Home
                            </NavLink>
                        </li>

                        {/* Play link */}
                        <li>
                            <NavLink to="/play" className={({ isActive }) =>
                                isActive ? styles.activeContact : ""
                            }>
                                Play
                            </NavLink>
                        </li>

                        {/* Learn dropdown */}
                        <li className={`${styles.dropdownParent} ${isLearnActive ? styles.activeParent : ""}`}>

                            <span onClick={() => setLearnOpen(!learnOpen)}>
                                Learn
                            </span>

                            <ul className={`${styles.dropdown} ${learnOpen ? styles.show : ""}`}>

                                <li>
                                    <NavLink to="/learn/course"
                                        className={({ isActive }) =>
                                            isActive ? styles.activeLink : ""
                                        }>
                                        Course
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/learn/lessons"
                                        className={({ isActive }) =>
                                            isActive ? styles.activeLink : ""
                                        }>
                                        Lessons
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/learn/quiz"
                                        className={({ isActive }) =>
                                            isActive ? styles.activeLink : ""
                                        }>
                                        Practice
                                    </NavLink>
                                </li>

                            </ul>
                        </li>

                        {/* Grandmasters */}
                        <li>
                            <NavLink to="/grandmasters"
                                className={({ isActive }) =>
                                    isActive ? styles.activeContact : ""
                                }>
                                Grandmasters
                            </NavLink>
                        </li>

                        {/* Contact */}
                        <li>
                            <NavLink to="/contact"
                                className={({ isActive }) =>
                                    isActive ? styles.activeContact : ""
                                }>
                                Contact
                            </NavLink>
                        </li>

                        {/* Theme button */}
                        <li className={styles.center}>
                            <button className={styles.mode} onClick={toggleTheme}>
                                {theme === "light"
                                    ? <Moon size={20} className={styles.moonIcon} />
                                    : <Sun size={20} className={styles.sunIcon} />
                                }
                            </button>
                        </li>

                        {/* Login button */}
                        <li>
                            <button onClick={() => setShowLogin(true)}>
                                <FaRegUser />
                            </button>
                        </li>

                    </ul>
                </div>
            </div>

            {/* burger menu */}
            <div
                className={`${styles.burger} ${open ? styles.open : ""}`}
                onClick={() => setOpen(prev => !prev)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

        </nav>
    )
}

export default Navbar