import React from 'react'
import "./Card.css"
const Card = ({ urlImg, title, tags, urlImgS }) => {
  return (
    <div className="app__card">

      <div className="app__card_img">
        <img src={urlImg} alt="" />
      </div>

      <div className="app__card_img_star">
        <img src={urlImgS} alt="" />
      </div>

      <div className="app__card_title">
        <p>{title}</p>
      </div>

      <div className="app__card_tags">
        <p>{tags}</p>
      </div>
    </div>
  )
}

export default Card