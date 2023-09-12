import React from 'react'
import { images } from "../../constants"
import "./Party.css"
const Party = () => {
  return (
    <div className="app__party app__grid section__padding" id='party'>
      <div className="app__party_content">
        <h1 className="headtext__butcherman">Halloween <br />party 31 October</h1>
        <p className="p__poppins">Organize a great Halloween party and enjoy the creepiest night of terror with all your friends</p>
        <button type='button' className='custom__button'>Start The Party!!!</button>
      </div>

      <div className="app__party_img">
        <img src={images.party} alt="cauldron" />
        <img src={images.stars} alt="star" className="party_star_1" />
        <img src={images.stars} alt="star" className="party_star_2" />
      </div>
    </div>
  )
}

export default Party