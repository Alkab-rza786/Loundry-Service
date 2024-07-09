import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

function Hero() {
    return (
        <div className='hero container' id='hero'>
            <div className="hero-text">
                <h1>Campus Clean: Your Laundry, Our Duty
                </h1>
                <p>Enjoy fast, reliable laundry service with cleaning and folding within 24 hours at student-friendly rates. We use only environmentally safe detergents to keep your clothes fresh and eco-friendly.</p>
                <button className='btn'> Explore more <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
