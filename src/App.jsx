import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

// import BackgroundPieces from './components/BackgroundPieces/BackgroundPieces'

import Home from './pages/Home'
import Play from './pages/Play'
import Quiz from './pages/Quiz'
import Lessons from './pages/Lessons'
import Tournaments from './pages/Tournaments'
import Shop from './pages/Shop'
import Contact from './pages/Contact'


function App() {
  return (
    <>
      <Navbar />
      {/* <BackgroundPieces/> */}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />

        <Route path='/learn/quiz' element={<Quiz />} />
        <Route path='/learn/lessons' element={<Lessons />} />
        <Route path='/learn/tournaments' element={<Tournaments />} />

        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App