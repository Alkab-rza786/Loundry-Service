import React from 'react'
import './Booking.css'
import white_arrow from '../../assets/white_arrow.png'

function Booking({ toggleForm }) {
    return (
        <div className='campus' id='campus'>

            <div className="gallery">
                <div className="service-box">
                    <div className="icon"><i class="fa-solid fa-shirt"></i></div>
                    <h2>Pick Up Your Clothes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquid!</p>
                    <div className="no">1</div>
                </div>
                <div className="service-box">
                    <div className="icon"><i class="fa-solid fa-hands-bubbles"></i></div>
                    <h2>Laundry & Dry Clean</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquid!</p>
                    <div className="no">2</div>

                </div>
                <div className="service-box">
                    <div className="icon"><i class="fa-solid fa-truck"></i></div>
                    <h2>Foldes Clothes & Deliver</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquid!</p>
                    <div className="no">3</div>

                </div>
            </div>



            <button className='btn dark-btn' onClick={toggleForm}>Book Our Services now <img src={white_arrow} alt="" /></button>

        </div>
    )
}

export default Booking
