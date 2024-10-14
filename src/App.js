import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './components/footer';
import Management from './Pages/Management';
import Oilandgas from './Pages/subpages/Oilandgas';
import Mining from './Pages/subpages/Mining';
import Health from './Pages/subpages/Health';
import Education from './Pages/subpages/Education';
import Realestate from './Pages/subpages/Realestate';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/oilandgas" element={<Oilandgas />} />
      <Route path="/realestate" element={<Realestate />} />
      <Route path="/health" element={<Health />} />
      <Route path="/mining" element={<Mining />} />
      <Route path="/education" element={<Education />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/management" element={<Management />} />
    </Routes>
  </div>
</BrowserRouter>
    </div>
    
  );
}

export default App;
