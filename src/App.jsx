import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'
import Play from './pages/Play'
import Quiz from './pages/Quiz'
import Lessons from './pages/Lessons'
import Grandmasters from './pages/Grandmasters'
import Contact from './pages/Contact'
import Course from './pages/Course'
import LoginModal from './components/auth/LoginModal'

function App() {
  const [theme, setTheme] = useState("dark"); 
  // saytın cari teması (dark / light)

  const [showLogin, setShowLogin] = useState(false);
  // login modalın görünməsi / gizlənməsi

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // istifadəçinin login statusu

  const toggleTheme = () => {
    // theme dəyişdirilir: dark ↔ light
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    // seçilən theme bütün sayta tətbiq olunur
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const handleLogin = (user) => {
    // login məlumatı localStorage-da saxlanır
    localStorage.setItem("user", JSON.stringify(user));

    setIsLoggedIn(true);   // user login oldu
    setShowLogin(false);   // modal bağlanır
  }

  return (
    <>
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        setShowLogin={setShowLogin} 
        isLoggedIn={isLoggedIn}
      />

      {/* Routing sistemi */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />
        <Route path='/learn/course' element={<Course />} />
        <Route path='/learn/lessons' element={<Lessons />} />
        <Route path='/learn/quiz' element={<Quiz />} />
        <Route path='/grandmasters' element={<Grandmasters />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {/* login modal yalnız açıldıqda görünür */}
      {showLogin && (
        <LoginModal 
          onClose={() => setShowLogin(false)} 
          onLogin={handleLogin}
        />
      )}

      <Footer />
    </>
  )
}

export default App