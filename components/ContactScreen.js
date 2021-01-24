import React from 'react'
import styles from '../styles/ContactScreen.module.css'
import {FaPaperPlane} from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { BiSave } from 'react-icons/bi'

const ContactScreen = () => {
    return (
        <div className={styles.contact}>
            <h1 className={styles.contactTitle}>Contact</h1>
            <form className={styles.contactForm} action="POST">
                <div className={styles.topTagWrapper}>
                    <div className={styles.topTag} style={{ width: '350px' }}>
                        <div className={styles.topTagLogo}>
                            <BsEnvelope style={{color: 'white'}} size={50}/>
                        </div>
                        <a href="/" className={styles.emailTagText}>brendan@cariota.com</a>
                    </div>
                    <div className={styles.topTag} style={{ width: '275px' }}>
                        <div className={styles.topTagLogo}>
                            <FaLinkedin style={{color: 'white'}} size={50}/>
                        </div>
                        <a href="/">Brendan Cariota</a>
                    </div>
                    <div className={styles.topTag} style={{ width: '200px' }}>
                        <div className={styles.topTagLogo}>
                            <BiSave style={{color: 'white'}} size={50}/>
                        </div>
                        <a href="/">Resume</a>
                    </div>
                    
                </div>
                <div className={styles.topInputWrapper}>
                    <div className={styles.inputWrapperInput}>
                        <label className={styles.label} htmlFor="name">Full Name</label>
                        <input className={styles.inputBar} type="text" name="name" required/>
                    </div>
                    <div className={styles.inputWrapperInput}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input className={styles.inputBar} type="email" name="email" required/>
                    </div>
                </div>
                
                <div className={styles.inputWrapper}>
                    <label className={styles.labelTextArea} htmlFor="message">Message</label>
                    <textarea className={styles.inputTextArea} type="textarea" name="message" required/>
                </div>
                <button className={styles.submitBtn} type='submit'><div className={styles.sendIconContainer}><FaPaperPlane className={styles.sendIcon} size={40}/></div>Send Message</button>
            </form>
        </div>
    )
}

export default ContactScreen
