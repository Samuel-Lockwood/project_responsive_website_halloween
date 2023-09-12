import React, { useState, useEffect } from 'react'
import { images } from "../../constants"
import { HiOutlineViewGrid } from "react-icons/hi"
import { RiCloseFill } from "react-icons/ri"
import "./Navbar.css"
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const hiddeMenu = () => {
    setToggleMenu(false);
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollY >= 10 ? "hsl(22, 8%, 6%)" : "transparent",
    boxShadow: scrollY >= 10 ? "0px 4px 16px hsla(22, 10%, 2%, 0.6)" : "none",
  };

  return (
    <div className="app__navbar" style={navbarStyle}>
      <a href="#home" className="app__navbar_logo">
        <img src={images.logo} alt="logo" />
        <p>Halloween</p>
      </a>

      <div className="app__navbar_links_desktop">
        <p><a href="#home">Home</a></p>
        <p><a href="#aboutus">About Us</a></p>
        <p><a href="#items">Items</a></p>
        <p><a href="#party">Party</a></p>
      </div>

      <div className="app__navbar_menu">
        {toggleMenu
          ? null
          : <HiOutlineViewGrid color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className="app__navbar_links_mobile slide-bottom">
            <p><a href="#home" onClick={hiddeMenu}>Home</a></p>
            <p><a href="#aboutus" onClick={hiddeMenu}>About Us</a></p>
            <p><a href="#items" onClick={hiddeMenu}>Items</a></p>
            <p><a href="#party" onClick={hiddeMenu}>Party</a></p>
            <RiCloseFill color='#db6724' size={27} onClick={()=> setToggleMenu(false)}/>
            <img src={images.n_Bat} alt="bat" />
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar