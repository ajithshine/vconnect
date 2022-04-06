import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      </Router>
      
    
    </>
  );
}

export default App;
