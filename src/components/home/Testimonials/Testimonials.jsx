import React from 'react'
import styles from './Testimonials.module.css'

import { testimonials } from './data';
import { FaStar } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Testimonials() {

    return (
        <section className={styles.testimonials}>
            <div className='container'>


                <div className={styles.testimonialGrid}>

                    <div className={styles.left}>
                        <div className={styles.testimonialsText}>
                            <h2>What Our Clients Say</h2>
                            <p>We believe that the best way to understand the quality of our platform is through the experiences of those who use it. Over time, we’ve had the opportunity to build a space for chess lovers of different levels, helping them improve their skills, learn new strategies, and enjoy the game with confidence. You can view real feedback from our users who share their honest thoughts and experiences with the platform.</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <Swiper
                            modules={[Navigation, Pagination, A11y, Keyboard]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            keyboard={{ enabled: true }}
                            speed={800}
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide
                                    key={item.id}>
                                    <div className={styles.testimonialCard}>
                                        <div className={styles.wrapper}>

                                            <div className={styles.top}>
                                                <div className={styles.imgCard}>

                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                                <div className={styles.text}>
                                                    <p>
                                                        {item.text}
                                                    </p>
                                                    <h4>{item.name}</h4>
                                                    <span>{item.job}</span>
                                                    <div className={styles.stars}>
                                                        {Array(item.rating).fill().map((_, i) => (
                                                            <FaStar key={i} style={{ color: "var(--accent)" }} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>


            </div>

        </section >
    );
}

export default Testimonials