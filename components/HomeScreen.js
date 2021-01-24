import React from 'react'
import styles from '../styles/HomeScreen.module.css'
import { FiArrowDownCircle } from 'react-icons/fi'

const HomeScreen = () => {
    return (
        <div className={styles.HomeScreen}>
            <h1 className={styles.home_name}>Brendan Cariota</h1>
            <p className={styles.home_desc}>I'm a self-taught developer who enjoys building and designin websites, apps, software and everything in between.</p>
            <div className={styles.continueSection}>
                <FiArrowDownCircle className={styles.arrowIcon} size={50}/>
                <h2 className={styles.projectsBtn}>See My Work</h2>
            </div>
            <div className={styles.picMe}></div>
        </div>
    )
}

export default HomeScreen
