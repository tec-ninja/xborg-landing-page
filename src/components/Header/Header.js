import React from 'react'
import Logo from '../../assets/VispX-white-logo.svg'
import { FaTwitter, FaDiscord, FaGlobe } from 'react-icons/fa';
import './header.css'
const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
                {/* <h1>LOGO HERE</h1> */}
                <img src={Logo} alt="logo" />
            </div>
            <div className="header-btn">
                {/* <button>MINT A COLLECTION</button> */}
                <a href='#' target='_blank'><FaTwitter /></a>
                <a href='#' target='_blank'><FaDiscord /></a>
                <a href='#' target='_blank'><FaGlobe /></a>
            </div>
        </div>
    </header>
  )
}

export default Header