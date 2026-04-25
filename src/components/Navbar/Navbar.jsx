import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.left}>
                <li><NavLink to="/"
                className={({isActive})=> isActive ? styles.activeContact : ""}
                >Home</NavLink></li>
                <li><NavLink to="/play"
                className={({isActive})=> isActive ? styles.activeContact : ""}
                >Play</NavLink></li>

                <li className={styles.dropdownParent}>
                    <span>Learn</span>
                    <ul className={styles.dropdown}>
                        <li><NavLink to="/learn/quiz">Quiz</NavLink></li>
                        <li><NavLink to="/learn/lessons">Lessons</NavLink></li>
                        <li><NavLink to="/learn/tournaments">Tournaments</NavLink></li>
                    </ul>
                </li>

                <li><NavLink to="/shop"
                    className={({ isActive }) => isActive ? styles.activeContact : ""}
                >Shop</NavLink></li>
                
                <li><NavLink to="/contact"
                    className={({ isActive }) => isActive ? styles.activeContact : ""}
                >Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar