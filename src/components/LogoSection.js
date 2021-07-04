import React from 'react'

import LogoService from '../Assets/img/logoService.jpg'
const LogoSection = () => {
    return (
        <div>
             <div className="websiteAbout">
                <div id="rowThing" className="row row2">
                    <div className="col">
                        <img alt="Team Members" className="aboutImage" src={LogoService}/>
                    </div>
                    <div className="col">
                        <h5>Our team has been in the industry for years!
                        </h5>
                        <h1 className="cardTitle">A TEAM FILLED WITH
                                                                                                                                        EXPERIENCE</h1>
                        <p>Our team has more then 5 years of experience coding! Our team is dedicated to bringing clients the most up to date, innovative, efficient and effective graphic designing techniques for their websites and the marketing industry. Choose us today to grow your business!
                        </p>
                        <button className="btnPosition">
                            <span>CONTACT TEAM</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="web">
                <div id="rowThing" className="row row2">

                    <div id="column1" className="col">
                        
                        <h1 className="cardTitle2">SERVICE FEATURES</h1>

                        <p className="sectionSub">We tailor every single package to fit the needs of our clients perfectly! Here are a few of the things you can expect with one of our website design packages!</p>

                    </div>
                    <div id="column2" className="col">
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Responsive Design
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Fast Delivery
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Modern Technology
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Professional & Modern
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Fully custom
                        </p>

                    </div>
                </div>
            </div>
            <div className="websitePricing">
                <p className="cardSub">We strive to bring new and innovating ideas for client use worldwide!
                </p>
                <h1 className="cardTitle">OUR WEBSITE DEVELOPMENT PRICING
                </h1>
                <div className="cardRow">
            <div className="priceCard">
                <h1 className="cardTitle">BASIC</h1>
                <h3 >$300</h3>
                <p>
                    <i id="g" class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-clock"></i> Delivery time: 1 Week</p>

                <p>Pricing listed above is subject to change depending on complexity of the project. Could be less, could be more!

                </p>
                <div className="cardButton">
                    <span>CONTACT TEAM</span>
                </div>
            </div>
            <div className="priceCard">
                <h1 className="cardTitle">STANDARD</h1>
                <h3>$600</h3>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-clock"></i> Delivery time: 1-2 Weeks</p>

                <p>Pricing listed above is subject to change depending on complexity of the project. Could be less, could be more!

                </p>
                <div className="cardButton">
                    <span>CONTACT TEAM</span>
                </div>
            </div>
            <div className="priceCard">
                <h1 className="cardTitle">PREMUIM</h1>
                <h3>$1200</h3>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-check"></i> Website Item</p>
                <p>
                    <i class="fa fa-clock"></i> Delivery time: 2-4 Weeks</p>


                <p>Pricing listed above is subject to change depending on complexity of the project. Could be less, could be more!

                </p>
                <div className="cardButton">
                    <span>CONTACT TEAM</span>
                </div>
            </div>
            </div>
                <h6 className="cardUnder">* Need something more custom? No problem! Feel free to send our website design team a message to inquire about your project by clicking here! *
                </h6>
            </div>
        </div>
    )
}

export default LogoSection
