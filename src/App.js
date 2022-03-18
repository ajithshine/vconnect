import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="./Signup" element={<Signup />} />
      </Routes>
      </Router>
      
    
    </>
  );
}

export default App;
