import React from 'react'
import styles from '../styles/Project.module.css'
import { BiCommentDetail } from 'react-icons/bi'

const Project = ({ tagOne, tagTwo, title, desc, backColor }) => {
    return (
        <div className={styles.project} style={{ backgroundColor: backColor}}>
            <div className={styles.content}>
                <div className={styles.infoSection}>

                    <div className={styles.tags}>
                        <div className={styles.tag}>
                            <h2 className={styles.tagText}>{tagOne}</h2>
                        </div>
                        <div className={styles.tag}>
                            <h2 className={styles.tagText}>{tagTwo}</h2>
                        </div>
                    </div>
                    
                    <div className={styles.titleSection}>
                        <h1 className={styles.title}>{title}</h1>
                    </div>

                    <p className={styles.desc}>{desc}</p>

                    <div className={styles.detailSection}>
                        <h2 className={styles.details}>More Details</h2>
                        <BiCommentDetail size={20}/>
                    </div>
                </div>
                <div className={styles.image}></div>
            </div>
        </div>
    )
}

Project.defaultProps = {
    tagOne: 'React',
    tagTwo: 'Full Stack',
    title: 'Electric Aura',
    desc: 'E-commerce store built for a Nail Artist',
    backColor: 'black'
}

export default Project
