import React from 'react'

import softwareService from '../Assets/img/DashboardFinal.png'
const SoftwareSection = () => {
    return (
        <div>
             <div className="websiteAbout">
                <div id="rowThing" className="row row2">
                    <div className="col">
                        <img alt="Team Members" className="aboutImage" src={softwareService}/>
                    </div>
                    <div className="col">
                        <h5>Need some custom software to run your buisness?
                        </h5>
                        <h1 className="cardTitle">SOFTWARE ENGINEERING SOLUTIONS</h1>
                        <p>Our team has had a lot of expierence with running a buisness. Nowadays most buisnesses need some sort of software, external or internal. This software can be used for a variety of purposes, from database management, to revunue analysis, let us take care of the hardwork to deliver you your own software.</p>
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

                        <p className="sectionSub">We tailor every single package to fit the needs of our clients perfectly! Here are a few of the things you can expect with one of our website design packages!</p>

                    </div>
                    <div id="column2" className="col">
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Fast Delivery
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Custom Software
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Guranteed Improvement 
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> User Friendly
                        </p>
                        <p className="serviceItem">
                            <i id="f" class="fa fa-check"></i> Secure Software
                        </p>

                    </div>
                </div>
            </div>
            <div className="websitePricing">
                <p className="cardSub">We strive to bring new and innovating ideas for client use worldwide!
                </p>
                <h1 className="cardTitle">OUR SOFTWARE DEVELOPMENT PRICING
                </h1>
                <div className="cardRow">
            <div className="priceCard">
                <h1 className="cardTitle">PREMUIM</h1>
                <h3 >$400 - $2000</h3>
                <p>
                    <i id="g" class="fa fa-check"></i> Secure Software</p>
                <p>
                    <i class="fa fa-check"></i> Website Integration </p>
                <p>
                    <i class="fa fa-check"></i> Database Connection </p>
                <p>
                    <i class="fa fa-check"></i> SEO Optimization</p>
                <p>
                    <i class="fa fa-check"></i> Fast Software</p>
                    <p>
                    <i class="fa fa-check"></i> Easy Access</p>
                    <p>
                    <i class="fa fa-check"></i> Multiple Client Revisions</p>
                    
                    <p>
                    <i class="fa fa-check"></i> Content Management Systems</p>
                    <p>
                    <i class="fa fa-check"></i> Database Management</p>
                    
           
                    
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
           
            </div>
                <h6 className="cardUnder">* Want something more fit for you? Let us know, feel free to send us a message to get a qoute on your idea! *
                </h6>
            </div>
        </div>
    )
}

export default SoftwareSection
