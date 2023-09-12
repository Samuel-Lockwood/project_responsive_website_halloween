import React from 'react'
import { BsInstagram, BsFacebook,  BsTwitter } from "react-icons/bs"
import { images } from "../../constants"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="app__footer section__padding" id='footer'>
      <div className="shape__small"></div>
      <div className="shape__big"></div>
      <div className="app__footer_content">
        <div className="app__footer_content_footer">
          <a href="#home" className="app__footer_logo">
            <img src={images.logo} alt="logo" />
            Halloween
          </a>

          <p className="p__poppins" style={{ marginTop: "1rem" }}>Enjoy the spookiest <br /> night of your life.</p>
        </div>

        <div className="app__footer_links">
          <h3 style={{ marginBottom: "1rem" }}>About Us</h3>
          <p><a href="#">About Us</a></p>
          <p><a href="#">Features</a></p>
          <p><a href="#">News & Blog</a></p>
        </div>

        <div className="app__footer_links">
          <h3 style={{ marginBottom: "1rem" }}>Services</h3>
          <p><a href="#">Pricing</a></p>
          <p><a href="#">Discounts</a></p>
          <p><a href="#">Send a gift</a></p>
        </div>

        <div className="app__footer_links">
          <h3 style={{ marginBottom: "1rem" }}>Company</h3>
          <p><a href="#">Blog</a></p>
          <p><a href="#">Celebrations</a></p>
          <p><a href="#">About</a></p>
        </div>  

        <div className="app__footer_social_media">
          <h3 style={{ marginBottom: "1rem" }}>Social Media</h3>
          <BsInstagram />
          <BsFacebook />
          <BsTwitter />
        </div>

      </div>
      
        <div className="app__footer_img">
          <img src={images.f_Tree1} alt="tree" className="footer_tree_1" />
          <img src={images.f_Tree2} alt="tree" className="footer_tree_2" />
        </div>

        <div className="app__footer_copy">
          <p className="p__poppins">&#169; Copyright Samuel Kaio. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer