import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 700,
  once: true
});

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)