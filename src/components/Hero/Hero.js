import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section className='hero' id='hero'>
        <div className="container">
            <div className="hero-content">
                <p className='hero-title'> XBorg</p>
                <p className='hero-description'>A Powerhouse Utility NFT</p>
                <br />
                <br />
                {/* <p>Designed specifically for investors and passive income lovers and powered by the biggest utility bombshell in launchpad history! This quirky NFT is limited in suply and brings our holders a powerhouse of benefits never seen before in launchpad history.</p>
                <br />
                <br /> */}
                <div className="hero-btn">
                  <button>The Mint</button>
                  <button>Opensea</button>
                </div>
            </div>
        </div>
        <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero