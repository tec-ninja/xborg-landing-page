import React from 'react'
import './tiers.css'
import Autobot from '../../assets/autobot.png'
import Common from '../../assets/common-tier.png'
import NFT3600 from '../../assets/nft 3600.png'
import Maximal from '../../assets/maximal.png'
import Decpticon from '../../assets/decpticon.png'
import Elite from '../../assets/elite tier.png'
import Rare from '../../assets/rare-tier.png'
import NFT1800 from '../../assets/nft 1800.png'
import NFT600 from '../../assets/nft 600.png'


const Tiers = () => {
  return (
    <section className="tiers" id="tiers">
        <div className="container">
             <div className="sec-title">
                <div className="sec-heading" data-aos="fade-right">
                    <h1>Genesis Mechanics</h1>
                    <span></span>
                </div>  
            </div>
            <div className="tier-container">
                <div className="tier-wrapper" data-aos="flip-up">
                    <div className="tier-head bg-head-f">
                        <div className="tier-head-img">
                            {/* <img src={Autobot} alt="autobot" /> */}
                        </div>
                        <span>Royalties</span>
                    </div>
                    <div className="tier-bdy bg-body-f ">
                        <div className="tier-inner-wrap">
                            <div className="tier-head">
                                <div className="tier-head-img">
                                    {/* <img src={Common} alt="autobot" /> */}
                                </div>
                                {/* <span>4. Common Tier</span> */}
                            </div>
                            <div className="tier-head">
                                <div className="tier-head-img">
                                    {/* <img src={NFT3600} alt="autobot" /> */}
                                </div>
                                {/* <span>NFT (3600)</span> */}
                            </div>
                            {/* <div className="bg-img-f">
                                <img src={Bot1} alt="bot one" />
                            </div>  */}
                        </div>
                    </div>
                </div>
                <div className="tier-wrapper" data-aos="flip-up">
                    <div className="tier-head bg-head-s">
                        <div className="tier-head-img">
                            {/* <img src={Decpticon} alt="autobot" /> */}
                        </div>
                        <span>Bitch Tax</span>
                    </div>
                    <div className="tier-bdy bg-body-s">
                        <div className="tier-inner-wrap">
                            <div className="tier-head">
                                <div className="tier-head-img">
                                    {/* <img src={Rare} alt="autobot" /> */}
                                </div>
                                {/* <span>5. Rare Tier</span> */}
                            </div>
                            <div className="tier-head">
                                <div className="tier-head-img">
                                    {/* <img src={NFT1800} alt="autobot" /> */}
                                </div>
                                {/* <span>NFT (1800)</span> */}
                            </div>
                            {/* <div className="bg-img-s">
                                <img src={Bot2} alt="bot two" />
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="tier-wrapper" data-aos="flip-up">
                    <div className="tier-head bg-head-t">
                        <div className="tier-head-img">
                            {/* <img src={Maximal} alt="autobot" /> */}
                        </div>
                        <span>Gas Optimization</span>
                    </div>
                    <div className="tier-bdy bg-body-t">
                        <div className="tier-inner-wrap">
                            <div className="tier-head">
                                <div className="tier-head-img">
                                    {/* <img src={Elite} alt="autobot" /> */}
                                </div>
                                {/* <span>6. Elite  Tier</span> */}
                            </div>
                            <div className="tier-head">
                                <div className="tier-head-img">
                                    {/* <img src={NFT600} alt="autobot" /> */}
                                </div>
                                {/* <span>NFT (600)</span> */}
                            </div>
                            {/* <div className="bg-img-t">
                                <img src={Bot3} alt="bot three" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tiers