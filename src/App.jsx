import React from 'react';
import "./index.css";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
  <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Hero />} />
    <Route path='/login' element={<Login />} />
  </Routes>
  </>
  )
}

export default App