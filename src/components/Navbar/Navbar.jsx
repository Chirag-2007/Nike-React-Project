import React from 'react'
import './Navbar.css'
import brand_logo from '../../assets/images/brand_logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={brand_logo} alt="logo" />
        <ul>
          <a href="#menu">Menu</a>
          <a href="#location">Location</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </ul>
        <Link to="/login">
          <button className='btn'>Login</button>
        </Link>
    </nav>
  )
}

export default Navbar