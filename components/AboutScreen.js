import React from 'react'
import styles from '../styles/AboutScreen.module.css'
import { FiArrowDownCircle } from 'react-icons/fi'

const AboutScreen = () => {
    return (
        <div className={styles.AboutScreen}>
            <h1 className={styles.about_heading}>About</h1>
            <div className={styles.about_content}>
                <div className={styles.about_left}>
                    <p className={styles.about_desc}>I'm a self-taught developer and freelancer with a passion for full-stack development.</p>
                    <div className={styles.continueSection}>
                        <FiArrowDownCircle className={styles.arrowIcon} size={70}/>
                        <h2 className={styles.contactBtn}>Reach Out</h2>
                    </div>
                </div>
                <div className={styles.about_right}>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutScreen
