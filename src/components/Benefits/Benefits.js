import React from 'react'
import './benefits.css'
const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
        <div className="container">
            <div className="sec-title" >
                <div className="sec-heading" data-aos="fade-right">
                    <h1>Holders Benefits</h1>
                    <span></span>
                </div>  
            </div>
            <div className="benefits-container">
                <div className="benefits-wrap">
                    <div className="bg-effect">
                        <div className="blur-box">
                            <div className="skew-box"></div>
                            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filter">
                                <defs>
                                    <filter id="522c589e-f1e0-4d61-a0ad-c19686231621">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur"></feGaussianBlur>
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 32 -16" result="clamp"></feColorMatrix>
                                        <feComposite in="SourceGraphic" in2="clamp" operator="atop"></feComposite>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="benefits-r">
                        <div className="benefits-l">
                            <h1>Access to IDO and IGOs</h1>
                        </div>
                        <div className="benefits-r-div">
                            <p>
                                Holders of Xborg unlock the most important features in the VISPX ecosystem i.e., project IDOs and IGOs on our launchpad with its tier-based system that is completely oriented towards the community.
                            </p>
                            <br/>
                            <p>
                                Holding a certain amount of Xborgs qualifies users to get the chance to participate in token offering on our launchpad for multiple projects. 
                            </p>
                        </div>
                        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" style={{visibility: "hidden", position: "absolute"}}><defs><filter id="28e7aa83-fb4d-4360-9cd4-22a982d0d941"><feGaussianBlur in="SourceGraphic" stdDeviation="16"></feGaussianBlur></filter><filter id="4c4bed40-ca09-4618-a81f-aa7f26d54331"><feColorMatrix in="SourceGraphic" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 32 -16"></feColorMatrix></filter><filter id="bee5bf2f-00a1-4800-a6fa-55a124746353"><feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur"></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 32 -16" result="clamp"></feColorMatrix><feComposite in="SourceGraphic" in2="clamp" operator="atop"></feComposite></filter></defs></svg>
                    </div>
                </div>
                <div className="benefits-wrap col-rev">
                    <div className="bg-effect">
                        <div className="blur-box">
                            <div className="skew-box"></div>
                            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filter">
                                <defs>
                                    <filter id="522c589e-f1e0-4d61-a0ad-c19686231621">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur"></feGaussianBlur>
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 32 -16" result="clamp"></feColorMatrix>
                                        <feComposite in="SourceGraphic" in2="clamp" operator="atop"></feComposite>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="benefits-r">
                        <div className="benefits-r-div">
                            <p>  
                                Simple yield mechanics are applied in the staking pool to offer VISPX project tokens and partner project tokens for Xborg holders.
                            </p>
                            <br/>
                            <p>
                                These yield rewards are calculated using the multiplier coefficient, the rarity of a Xborg NFT and the staking period. 
                            </p>
                        </div>
                    </div>
                    <div className="benefits-l">
                        {/* <img src={Title2} alt="icon" className='title-2' /> */}
                        <h1><span>Yield</span>  box</h1>
                    </div>
                </div>
                <div className="benefits-wrap">
                    <div className="bg-effect">
                        <div className="blur-box">
                            <div className="skew-box"></div>
                            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filter">
                                <defs>
                                    <filter id="522c589e-f1e0-4d61-a0ad-c19686231621">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur"></feGaussianBlur>
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 32 -16" result="clamp"></feColorMatrix>
                                        <feComposite in="SourceGraphic" in2="clamp" operator="atop"></feComposite>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="benefits-l">
                        {/* <img src={Title3} alt="icon"  className='title-1' /> */}
                        <h1><span>Exclusive</span>  Dao access</h1>
                    </div>
                    <div className="benefits-r">
                        <div className="benefits-r-div">
                            <p> 
                                Owning a Xborg NFT makes you a member of the Vispx DAO with voting rights. You can also get access to the governance forum and discord-private channels.
                            </p>
                            <br/>
                            <p>
                                Here users can exercise their voting rights for various activities including vetting processes for incubated projects, community events, ecosystem economy etc. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="benefits-wrap col-rev">
                    <div className="bg-effect">
                        <div className="blur-box">
                            <div className="skew-box"></div>
                            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filter">
                                <defs>
                                    <filter id="522c589e-f1e0-4d61-a0ad-c19686231621">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur"></feGaussianBlur>
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 32 -16" result="clamp"></feColorMatrix>
                                        <feComposite in="SourceGraphic" in2="clamp" operator="atop"></feComposite>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="benefits-r">
                        <div className="benefits-r-div">
                            <p> 
                                Xborg holders unlock an access pass for the alpha game play and exclusive NFTs from our partnered gaming projects
                            </p>
                        </div>
                    </div>
                    <div className="benefits-l">
                        {/* <img src={Title5} alt="icon" className='title-2' /> */}
                        <h1><span>Gaming</span> project perks</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits