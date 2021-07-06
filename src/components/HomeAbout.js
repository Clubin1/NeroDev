import React from 'react'

import aboutImage from '../Assets/img/team_2.png'

const HomeAbout = () => {
    return (
        <div>
    <div className="homeAbout">
        <div id="rowThing" className="row row2">
            <div className="col">
                <img alt="Team Members" className="aboutImage" src={aboutImage}/>
            </div>
            <div className="col sss">
                <h5>Our team has been in the industry for years!
                </h5>
                <h1 className="cardTitle">A TEAM FILLED WITH
                                                                                EXPERIENCE</h1>
                <p>Our team has more then 5 years of experience coding! Our team is dedicated to bringing clients the most up to date, innovative, efficient and effective graphic designing techniques for their websites and the marketing industry. Choose us today to grow your business!


                </p>
                <a href="#con">
                <button className="btnPosition">
                    <span>CONTACT TEAM</span>
                </button>
                </a>
            </div>
        </div>

        <div id="rowThing"className="row row2 aboutSecond">

            <div className="col">
                <h5>Proven track record for customer satisfaction!
                </h5>
                <h1 className="cardTitle">HELP US KICK START YOUR BUISNESS</h1>
                <p>We have plenty of expierence in this field and we're ready to bring the newest and most professional technology to your company. Having a digital precense these days is more important than ever. Let us help you get a head start.
                </p>
                <a href="#con">
                <button className="btnPosition">
                    <span>CONTACT TEAM</span>
                </button>
                </a>
            </div>
            <div className="col">
                <div className='colorDiv'>
                    <img alt="WebDev" className="aboutImage color" src="https://freepngimg.com/thumb/web_design/12-2-web-design-png-images.png"/>
                </div>
            </div>
        </div>
    </div>
    <div className="aboutFooter">
        <h1 className="cardTitle ee">WHY CHOOSE US?</h1>
        <p className="aboutInfo ff">From graphic design to web development to software development, we offer a lot of services at NeroDev. Our main thing as an agency is web development, but we also do graphic design. <br></br>We can custom make any logos or images fit to your desires to make your company look more professional.</p>
    </div>
    </div>
    )
}

export default HomeAbout
