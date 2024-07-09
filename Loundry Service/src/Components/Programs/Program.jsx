import React from 'react'
import './Program.css'
import dry_icon from '../../assets/dry_icon.png'
import loundry_icon from '../../assets/loundry_icon.png'
import iron from '../../assets/iron.png'
import service_img1 from '../../assets/service_img1.jpg'
import service_img2 from '../../assets/service_img2.jpg'
import service_img3 from '../../assets/service_img3.jpg'

function Program() {
    return (
        <div className='programs ' id='program'>
            <div className="program">
                <img src={service_img3} alt="" />
                <div className="caption">
                    <img src={loundry_icon} alt="" className='white' />
                    <p>Laundery Service</p>
                </div>
            </div>
            <div className="program">
                <img src={service_img2} alt="" />
                <div className="caption">
                    <img src={dry_icon} alt="" className='white' />
                    <p>Dry clean</p>
                </div>
            </div>
            <div className="program">
                <img src={service_img1} alt="" />
                <div className="caption">
                    <img src={iron} alt="" className='white' />
                    <p>Steam Iron</p>
                </div>
            </div>
        </div>
    )
}

export default Program
