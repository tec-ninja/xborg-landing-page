import React from 'react'
import SupplyImg from '../../assets/supply.png'

import './supply.css'
const Supply = () => {
  return (
    <section className="supply" id="supply">
        <div className="container">
            <div className="sec-title" >
                <div className="sec-heading"  data-aos="fade-left">
                    <h1>Supply</h1>
                    <span></span>
                </div>  
            </div>
            <div className="supply-container" >
                <div className="supply-img" data-aos="fade-right">
                    <img src={SupplyImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Supply