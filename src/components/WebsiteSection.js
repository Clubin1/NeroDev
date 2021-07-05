import React from 'react'

import serviceWebsite from '../Assets/img/serviceWebsite.png'

const WebsiteSection = () => {
    return (
        <div>
            <div className="websiteAbout">
                <div id="rowThing" className="row row2">
                    <div className="col">
                        <img alt="Team Members" className="aboutImage" src={serviceWebsite}/>
                    </div>
                    <div className="col">
                        <h5>Times are changing, let's help you keep up!
                        </h5>
                        <h1 className="cardTitle">WHY YOU NEED A
NEW WEBSITE</h1>
                        <p>Most website designers overlook the tiny details when developing their client's website. When you choose us to develop your website you will never regret it. We optimize each of our websites for every modern device used that can access the Internet. Your website content won't be outside the screen or hard to read like it is right now. You know it and so do we, it's time to choose VerveDev!</p>
                        <a href="#con">
                        <button className="btnPosition">
                            <span>CONTACT TEAM</span>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="web">
                <div id="rowThing" className="row row2">

                    <div id="column1" className="col">
                        
                        <h1 className="cardTitle2">SERVICE FEATURES</h1>

                        <p className="sectionSub">We're commited to customer satisfaction and gurantee every package is fit the customers needs. All of our packeges are guranteed to have the following!</p>
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
                <a href="#con">
                <div className="cardButton">
                    <span>CONTACT TEAM</span>
                </div>
                </a>
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
                <a href="#con">
                <div className="cardButton">
                    <span>CONTACT TEAM</span>
                </div>
                </a>
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
                <a href="#con">
                <div className="cardButton">
                    <span>CONTACT TEAM</span>
                </div>
                </a>
            </div>
            </div>
                <h6 className="cardUnder">* Want something more fit for you? Let us know, feel free to send us a message to get a qoute on your idea! *
                </h6>
            </div>
        </div>
    )
}

export default WebsiteSection
