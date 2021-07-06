import React from 'react'

import bn from '../Assets/img/bnsite.png';
import sym from '../Assets/img/symsite.png';
import ap from '../Assets/img/angel.png'
import pbd from '../Assets/img/pbd.png';
import bnlogo from '../Assets/img/biznan.png';
import al from '../Assets/img/axis.jpg'
import logoItem from '../Assets/img/NeroDEV_Inverted.png'

const WorkProjects = () => {
    return (
        <div className="workSection">
            <div id="websites" className="websiteSection">
                <h1 className="workSectionTitle">Websites</h1>

                <div className="projectWrapper">
                    <div className="websiteItem">
                        <img alt="website item" className="websiteItem"
                            src={bn}></img>
                    </div>
                    <div className="websiteItem">
                        <img alt="website item" className="websiteItem"
                            src={sym}></img>

                    </div>
                    <div className="websiteItem">
                        <img alt="website item" className="websiteItem"
                            src={ap}></img>

                    </div>

                    <div className="websiteItem">
                        <img alt="website item" className="websiteItem"
                            src={al}></img>
                    </div>


                </div>
            </div>
            <div id="logos" className="logoSection">
                <h1 className="workSectionTitle">Logos</h1>
                
                <div className="projectWrapper">
                    <div className="logoItem">
                        <img alt ="logo item"className="logoItem"
                            src={pbd}></img>
                    </div>
                    <div className="logoItem">
                        <img alt ="logo item"className="logoItem"
                            src={bnlogo}></img>

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
