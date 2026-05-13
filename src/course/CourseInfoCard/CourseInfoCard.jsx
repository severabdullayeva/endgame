import React from 'react'

import style from "./CourseInfoCard.module.css"


const courseMeta = [
    { label: "Beginner" },
    { label: "1–2h" },
    { label: "Self-paced" },
    { label: "Free" }
];
const CourseInfoCard = () => {
    return (
        <div className={style.infoCard}>
            <h3>About this course</h3>

            <p> Beginner-friendly chess tactics course...</p>

            <div className={style.infoCardMeta}>
                {courseMeta.map((item, index) => (
                    <span key={index}>{item.label}</span>
                ))}
            </div>
            <button>Start Practice</button>
        </div>
    )
}

export default CourseInfoCard