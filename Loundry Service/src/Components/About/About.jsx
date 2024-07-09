import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpg'

function About() {
    return (
        <div className='about' id='about'>
            <div className="about-left">
                <img src={about_img} className='about-img' />
            </div>
            <div className="about-right">
                <h3> About us</h3>
                <h2>We are Passinate about Laundary</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus natus corporis odit necessitatibus reiciendis ea tempora asperiores aperiam, culpa, unde temporibus ullam iste possimus molestiae architecto eaque ipsa corrupti libero!
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quos dignissimos rerum incidunt voluptatem porro.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum cumque eveniet nostrum. Voluptates culpa ut expedita! Cupiditate odio exercitationem, possimus cumque voluptates minima, alias maiores earum, hic corrupti nesciunt.</p>
            </div>
        </div>
    )
}

export default About
