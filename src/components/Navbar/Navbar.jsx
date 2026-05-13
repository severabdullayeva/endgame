import { useState } from 'react'

import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/logo/endgame-logo1.png'

import { Moon, Sun } from 'lucide-react'

const Navbar = ({ theme, toggleTheme }) => {
    const [open, setOpen] = useState(false)

    const[learnOpen, setLearnOpen] = useState(false)

    const location = useLocation();

    const isLearnActive = location.pathname.startsWith('/learn');

    return (
        <nav className={styles.navbar}>
            <div className='container' >
                <div className={` ${styles.navContent} ${open ? styles.openMenu : ""}`}>
                    <NavLink to="/" className={styles.top}>
                        <img className={styles.logo} src={logo} alt="Logo" />
                    </NavLink>

                    <ul className={styles.left}>

                        <li><NavLink to="/"
                            className={({ isActive }) => isActive ? styles.activeContact : ""}
                        >Home</NavLink></li>
                        <li><NavLink to="/play"
                            className={({ isActive }) => isActive ? styles.activeContact : ""}
                        >Play</NavLink></li>

                        <li className={`${styles.dropdownParent} ${isLearnActive ? styles.activeParent : ""}`}>
                            <span onClick={() => setLearnOpen(!learnOpen)}>Learn</span>
                            <ul className={`${styles.dropdown} ${learnOpen ? styles.show : ""}`}>
                                <li><NavLink to="/learn/course" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Course</NavLink></li>

                                <li><NavLink to="/learn/lessons" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Lessons</NavLink></li>
                                <li><NavLink to="/learn/quiz" className={({ isActive }) => (isActive ? styles.activeLink : "")}>Practice</NavLink></li>

                            </ul>
                        </li>

                        <li><NavLink to="/grandmasters"
                            className={({ isActive }) => isActive ? styles.activeContact : ""}
                        >Grandmasters</NavLink></li>

                        <li><NavLink to="/contact"
                            className={({ isActive }) => isActive ? styles.activeContact : ""}
                        >Contact</NavLink></li>
                        <li>
                            <button className={styles.mode} onClick={toggleTheme}>
                                {theme === "light"
                                    ? <Moon size={20} className={styles.moonIcon} />
                                    : <Sun size={20} className={styles.sunIcon} />
                                }
                            </button>
                        </li>
                    </ul>
                </div>
            </div>


            <div className={`${styles.burger} ${open ? styles.open : ""}`}
                onClick={() => setOpen(prev => !prev)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </nav>
    )
}

export default Navbar