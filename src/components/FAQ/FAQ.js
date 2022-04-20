import React, { useState } from 'react'
import Arrow from '../../assets/arrow.png'
import './faq.css'
const FAQ = () => {
    const [isActive1, setIsActive1] = useState(false);
	const [isActive2, setIsActive2] = useState(false);
	const [isActive3, setIsActive3] = useState(false);
	const [isActive4, setIsActive4] = useState(false);
	const [isActive5, setIsActive5] = useState(false);
  return (
    <section className="faqs" id="faqs">
        <div className="container">
            <div className="sec-title">
                <div className="sec-heading" data-aos="fade-left">
                    <h1>FAQ</h1>
                    <span></span>
                </div>  
            </div>
            <div className="question-container" data-aos="fade-up">
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive1(!isActive1)}>
                            <p>How does the XBorg NFT allow me to participate in IGOs? </p>
                            <img className={isActive1 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive1 ? "question-panel question-active" : "question-panel"
                            }
                        ><div>
                            <p>
                            It’s quite simple, connect your wallet on our platform, see the tier your attached to and choose the project you want to invest in.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive2(!isActive2)}>
                            <p>The YieldBox Generator allows multiple passive earnings?</p>
                           <img className={isActive2 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive2 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                           <p> Absolutely, every project we incubate an allocation of their token will be dedicated to the YieldBox which the XBorg holder can then claim.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive3(!isActive3)}>
                            <p>Each project has a different vesting schedule and allocation amount which will be decided case by case  How do I verify my NFT once I hold it?</p>
                           <img className={isActive3 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive3 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>
                            We will have an NFT verification on discord which will open up exclusive channels only accessible by NFT holders. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive4(!isActive4)}>
                            <p>Here you will be vetting projects we on board, discuss other projects, manage the DAO Treasury and much more  When will the first IGO open for XBorg holders?</p>
                           <img className={isActive4 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive4
                                    ? "question-panel question-active-lg"
                                    : "question-panel"
                            }
                        >
                            <div>
                            <p>The first project you will invest in is the VispX IDO!!! We are only allowing XBorg holders to participate in round 1  What happens to the royalties for NFT sales?  60% of the royalties will be going to the DAO Treasury and we will collectively decide how to manage the fund.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="question-inner-container">
                    <div className="question-wrapper">
                        <div className="question" onClick={() => setIsActive5(!isActive5)}>
                            <p>More on this later down the line  What can we discuss in the exclusive DAO Club?</p>
                           <img className={isActive5 ? "img-rotate" : " " } src={Arrow} alt="arrow" />
                        </div>
                        <div
                            className={
                                isActive5 ? "question-panel question-active" : "question-panel"
                            }
                        >
                            <div>
                            <p>Primarily to discuss vetting of new projects we want to incubate and managing the DAO Treasury however, we will be opening channels for users to discuss other projects etc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ