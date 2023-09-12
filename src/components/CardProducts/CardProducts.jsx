import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import "./CardProducts.css"
const CardProducts = ({ urlImg, title, tags, price, }) => {
  return (
    <div className="app__cardProducts">
      <div className="app__card_Products_img">
        <img src={urlImg} alt="" />
      </div>

      <div className="app__card_Products_title">
        <p>{title}</p>
      </div>

      <div className="app__card_Products_tags">
        <p>{tags}</p>
      </div>

      <div className="app__card_Products_price">
        <p>{price}</p>
      </div>

      <div className="app__card_Products_btn">
        <AiOutlineHeart size={15}/>
      </div>
    </div>
  )
}

export default CardProducts