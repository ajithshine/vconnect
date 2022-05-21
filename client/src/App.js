import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import Dashboard from './components/Dashboard/Dashboard';
import MyProfile from './components/MyProfile/MyProfile';
import OthersProfile from './components/OthersProfile/OthersProfile';
import Test from './components/Test';
import Settings from './components/Settings/Settings';
import Feed from './components/Feed/Feed';
import Relation from './components/Relation/Relation';

function App() {
  return (
    <>
      <Router>
      <Routes>
        {/* <Route path="/Login" element={<Login />} exact /> */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/Others" element={<Test />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Relations" element={<Relation />} />
      </Routes>
      </Router>
      
    
    </>
  );
}

export default App;
