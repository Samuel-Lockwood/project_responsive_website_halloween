import React from 'react'
import { images } from "../../constants"
import "./Header.css"
const Header = () => {
  return (
    <div className="app__header section__padding"id='home'>
      <div className="shape__small"></div>
      <div className="shape__big"></div>
      <div className="app__header_content">
        <h1>
          <span>Halloween</span> Trick Or Treat!!!
          <img src={images.stars} alt="star" className="header_star-1" />
          <img src={images.stars} alt="star" className="header_star-2" />
        </h1>
        <p className="p__poppins">This Halloween, enjoy trick-or-treating with your friends and spend a terrifying night under the full moon.</p>
        <button type='button' className='custom__button'>Explore Now!!!</button>
      </div>

      <div className="app__header_img" style={{ justifySelf: "center" }}>
        <img src={images.h_Pumpkin} alt="pumpkin" />
      </div>

      <div className="app__header_img_trees">
        <img src={images.h_Tree1} alt="tree" className='header_tree-1'/>
        <img src={images.h_Tree2} alt="tree" className='header_tree-2'/>
      </div>
    </div>
  )
}

export default Header