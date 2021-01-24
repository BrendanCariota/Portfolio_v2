import React from 'react'
import styles from '../styles/ProjectsSection.module.css'
import Project from '../components/Project'

const ProjectsSection = () => {
    return (
        <div className={styles.ProjectsSection}>
            <div className={styles.projects_background}></div>
            <h1 className={styles.projects_title}>Projects</h1>
            <div className={styles.projectContainer}>
                <Project backColor='#FFDE69'/>
                <Project backColor='#75FF69' title='Project One' desc='Built to increase productivity' tagOne='Mongo'/>
                <Project backColor='#7E69FF'/>
                <Project backColor='#D75252'/>
            </div>
            
        </div>
    )
}

export default ProjectsSection
