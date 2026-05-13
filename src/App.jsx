import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import Footer from './components/Footer/Footer'

// import BackgroundPieces from './components/BackgroundPieces/BackgroundPieces'

import Home from './pages/Home'
import Play from './pages/Play'
import Quiz from './pages/Quiz'
import Lessons from './pages/Lessons'

import Grandmasters from './pages/Grandmasters'
import Contact from './pages/Contact'
import Course from './pages/Course'


function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {/* <BackgroundPieces/> */}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />

        <Route path='learn/course' element={<Course />} />
        <Route path='/learn/lessons' element={<Lessons />} />
        <Route path='/learn/quiz' element={<Quiz />} />


        <Route path='/grandmasters' element={<Grandmasters />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App