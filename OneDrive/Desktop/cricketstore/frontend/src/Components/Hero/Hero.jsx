import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import * as utils from "@navin0507/string-utilsmns"
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2 className='typing-text'>"Your Cricket, Your Style."<span style={{ color: 'black' }}> !!</span></h2>
        <div>
                <div className="hero-hand-icon">
                    <p>Where Every</p>
                    <span className=''></span>
                    {/* <img src={hand_icon} alt=''/> */}
                </div>
                <p>Cricketer Shops.</p>
                <p></p>
            </div>    
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=''style={{color:'black'}}/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt='' />
        </div>
        
    </div>
  )
}
