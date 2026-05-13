import React from 'react'

import styles from './Course.module.css'

import CourseHero from '../course/CourseHero'

import CourseDescription from '../course/CourseDescription'

import CourseLessons from '../course/CourseLessons'

import CourseInfoCard from '../course/CourseInfoCard/CourseInfoCard'



const Course = () => {
    return (
        <main>

            <section>
                <div>
                    <CourseHero />
                </div>
            </section>

            <section id='course' className={`section-lg ${styles.sectionDescription}`}>
                <div className='container'>
                    <CourseDescription />
                </div>
            </section>

            <section className='section-lg'>
                <div className='container'>
                    <CourseLessons />
                </div>
            </section>

            <section className={styles.courseInfoCardSection}>

                <CourseInfoCard />

            </section>
        </main>
    )
}

export default Course