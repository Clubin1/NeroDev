import React from 'react'

import websiteItem from '../Assets/img/website.png'
import logoItem from '../Assets/img/NeroDEV_Inverted.png'

const WorkProjects = () => {
    return (
        <div className="workSection">
            <div id="websites" className="websiteSection">
                <h1 className="workSectionTitle">Websites</h1>

                <div className="projectWrapper">
                    <div className="websiteItem">
                        <img alt="website item" className="websiteItem"
                            src={websiteItem}></img>
                    </div>
                    <div className="websiteItem">
                        <img alt="website item" className="websiteItem"
                            src={websiteItem}></img>

                    </div>
                    <div className="websiteItem">
                        <img alt="website item" className="websiteItem"
                            src={websiteItem}></img>

                    </div>

                    <div className="websiteItem">
                        <img alt="website item" className="websiteItem"
                            src={websiteItem}></img>
                    </div>


                </div>
            </div>
            <div id="logos" className="logoSection">
                <h1 className="workSectionTitle">Logos</h1>
                
                <div className="projectWrapper">
                    <div className="logoItem">
                        <img alt ="logo item"className="logoItem"
                            src={logoItem}></img>
                    </div>
                    <div className="logoItem">
                        <img alt ="logo item"className="logoItem"
                            src={logoItem}></img>

                    </div>
                    <div className="logoItem">
                        <img alt ="logo item"className="logoItem"
                            src={logoItem}></img>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProjects
