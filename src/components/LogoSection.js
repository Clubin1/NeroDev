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
                        <h5>Your logo is your brand identity!
 </h5>
                        <h1 className="cardTitle">THE IMPORTANCE OF
YOUR LOGO</h1>
                        <p>When you think of the most successful companies around the world, the first thing that should stick in your mind is their logo! Companies such as Apple, Samsung, Google, etc. all have logos that are very memorable. Creating amazing logos that leave great first impressions in the mind of your customers is what we specialize in. Having a great logo is what will make the difference in turning a lead into an actual customer!

</p>
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

                        <p className="sectionSub">Every logo design we create is unique, effective and guranteed to take your branding to the next level.</p>

                    </div>
                    <div id="column2" className="col">
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Professional Branding
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Multiple Revisions
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Quick Delivery
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Eye Catching
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Unique 
                        </p>

                    </div>
                </div>
            </div>
            <div className="websitePricing">
                <p className="cardSub">We strive to bring new and innovating ideas for client use worldwide!
                </p>
                <h1 className="cardTitle">OUR lOGO DESIGN PRICING
                </h1>
                <div className="cardRow">
            <div id="twotime" className="priceCard">
                <h1 className="cardTitle">BASIC</h1>
                <h3 >$100</h3>
                <p>
                    <i id="g" class="fa fa-check"></i> 1 logo Content</p>
                <p>
                    <i class="fa fa-check"></i> High Resolution</p>
                <p>
                    <i class="fa fa-check"></i> 2 Rounds of Revisions</p>
                <p>
                    <i class="fa fa-check"></i> 1 Hour of Strategy</p>
                <p>
                    <i class="fa fa-check"></i> Professional Branding</p>
                <p>
                    <i class="fa fa-check"></i> Vector Source Files </p>
                <p>
                    <i class="fa fa-check"></i> Original Design</p>
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
            <div id="twotime" className="priceCard">
                <h1 className="cardTitle">STANDARD</h1>
                <h3>$250</h3>
                <p>
                    <i id="g" class="fa fa-check"></i> 2 logo Content</p>
                <p>
                    <i class="fa fa-check"></i> High Resolution</p>
                <p>
                    <i class="fa fa-check"></i> 4 Rounds of Revisions</p>
                <p>
                    <i class="fa fa-check"></i> 2 Hour of Strategy</p>
                <p>
                    <i class="fa fa-check"></i> Professional Branding</p>
                <p>
                    <i class="fa fa-check"></i> Vector Source Files </p>
                <p>
                    <i class="fa fa-check"></i> Original Design</p>
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
            <div id="twotime" className="priceCard">
                <h1 className="cardTitle">PREMUIM</h1>
                <h3>$400</h3>
                <p>
                    <i id="g" class="fa fa-check"></i> Multiple logo Content</p>
                <p>
                    <i class="fa fa-check"></i> High Resolution</p>
                <p>
                    <i class="fa fa-check"></i> Unlimited Rounds of Revisions</p>
                <p>
                    <i class="fa fa-check"></i> Unlimited Hours of Strategy</p>
                <p>
                    <i class="fa fa-check"></i> Professional Branding</p>
                <p>
                    <i class="fa fa-check"></i> Vector Source Files </p>
                <p>
                    <i class="fa fa-check"></i> Original Design</p>
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
            </div>
                <h6 className="cardUnder">* Want something more fit for you? Let us know, feel free to send us a message to get a qoute on your idea! *
                </h6>
            </div>
        </div>
    )
}

export default LogoSection
