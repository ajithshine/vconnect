import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Login/Signup';
import Index from './components/Index';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      </Router>
      
    
    </>
  );
}

export default App;
