import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import Dashboard from './components/Dashboard/Dashboard';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/Login" element={<Login />} exact />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={<MyProfile />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      </Router>
      
    
    </>
  );
}

export default App;
