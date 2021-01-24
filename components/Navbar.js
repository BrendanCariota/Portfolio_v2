import React, {useEffect, useState} from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 81) {
            setScrolled(true);
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={scrolled ? styles.NavbarScrolled : styles.Navbar}>
            <div className={styles.nav_left}>
                <a href='/' className={styles.nav_logo}>BSC</a> 
                <div className={styles.socialIconContainer}>
                    <FaGithub className={styles.socialIcons} size={40}/>
                    <FaLinkedin className={styles.socialIcons} size={40}/>
                </div>
                
            </div>
            <div className={styles.nav_right}>
                <a href="" className={styles.nav_link}>Home</a>
                <a href="" className={styles.nav_link}>About</a>
                <a href="" className={styles.nav_link}>Projects</a>
                <a href="" className={styles.nav_link}>Contact</a>
            </div>
            <FaBars className={styles.burgerMenu} size={40}/>
        </div>
    )
}

export default Navbar
