import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Login/Signup';
import Index from './components/Index';
import Home from './components/HomePage/Home';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      </Router>
      
    
    </>
  );
}

export default App;
