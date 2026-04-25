import React from 'react'
import Hero from '../components/home/Hero/Hero'
import Features from '../components/home/Features/Features'
import AboutUs from '../components/home/AboutUs/AboutUs'
import Cta from '../components/common/Cta/Cta'
import Footer from '../components/Footer/Footer'
import Testimonials from '../components/home/Testimonials/Testimonials'

import ctaImg from "../assets/cta/cta.png"

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <AboutUs />
      <Cta
        title="Ready to challenge yourself?"
        text="Play, learn, and grow your chess skills step by step..."
        buttonText="Start Playing"
        link="/play"
        image={ctaImg}
      />
      <Footer />
    </div>
  )
}

export default Home