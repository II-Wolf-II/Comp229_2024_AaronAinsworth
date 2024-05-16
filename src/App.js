import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './content/Navbar';
import Home from './content/Home';
import About from './content/About';
import Projects from './content/Projects';
import Services from './content/Services';
import Contact from './content/Contact';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}>
            </Route>
            <Route path="/about" element={<About/>}>
            </Route>
            <Route path="/projects" element={<Projects/>}>
            </Route>
            <Route path="/services" element={<Services/>}>
            </Route>
            <Route path="/contact" element={<Contact/>}>
            </Route>
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;