import React from 'react'
import './Hero.css'
import hero_image from '../../assets/images/hero-image.png'
import amazon from '../../assets/images/amazon.png'
import flipkart from '../../assets/images/flipkart.png'

const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className='hero-button'>
        <button>Shop Now</button>
        <button className='secondary-btn'>Category</button>
        </div>
        <div className='shopping'>
        <p>Also Available On</p>
        <div className='brand-icon'>
          <a href="https://dl.flipkart.com/s/ogKBlHuuuN">
             <img src={flipkart} alt="flipkart-logo" />
          </a>
        <a href="https://amzn.in/d/fC9IQQz">
          <img src={amazon} alt="amazon-logo" />
        </a>
        </div>
        </div>
        </div>
        <div className='hero-image'>
        <img src={hero_image} alt="hero-image" />
        </div>
    </main>
  )
}

export default Hero