import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './scroll/ScrolToTop.jsx';

AOS.init({
  duration: 700,
  once: true
});

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>
)