import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import Dashboard from './components/Dashboard/Dashboard';
import MyProfile from './components/MyProfile/MyProfile';
import OthersProfile from './components/OthersProfile/OthersProfile';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/Login" element={<Login />} exact />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<OthersProfile />} />
      </Routes>
      </Router>
      
    
    </>
  );
}

export default App;
