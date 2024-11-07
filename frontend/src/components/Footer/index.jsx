import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './footer.module.scss';

function Navbar() {
    return (
        <div className={styles.footerBackground}>
            <nav className={styles.navbar}>
                <p>2024 © LOCKS Mike - Tous droits reservés</p>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (isActive ? styles.active : undefined)}
                        >
                            Politique de confidentialité
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (isActive ? styles.active : undefined)}
                        >
                            Mentions légales
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
