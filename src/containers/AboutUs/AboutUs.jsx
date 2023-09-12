import React from 'react'
import { images } from "../../constants"
import "./AboutUs.css"
const AboutUs = () => {
  return (
    <div className="app__aboutUs app__grid section__padding" id='aboutus'>
      <div className="shape__small"></div>
      <div className="shape__big"></div>
      <div className="app__aboutUs_img">
        <img src={images.about} alt="scare" />
      </div>

      <div className="app__aboutUs_content">
        <h1 className="headtext__butcherman">About The Night <br />Of Terror</h1>
        <p className="p__poppins">Halloween is celebrated every October 31 at night, walk around the city with your friends and trick or treat, enjoy this celebration under the full moon.</p>
        <button type='button' className='custom__button'>Know More!!!</button>
      </div>
    </div>
  )
}

export default AboutUs