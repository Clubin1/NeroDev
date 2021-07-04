import React from 'react'
import '../Assets/Styles/Work.css'
import '../Assets/Styles/Home.css'

const WorkLanding = () => {
    return (
        <div className="workLanding">
              <p className="workInfo">Check out our past work
                <span className="textColor"> quickly!</span>
            </p>
            <h1 className="workTitle contactSize">Our Past Works</h1>
        
            <div className="buttonRow">
            <a className="workText" href="#websites">
                <div className="workButton">
                    WEBSITES
                </div>
            </a>
            <a className="workText" href="#logos">
                <div className="workButton">
                    LOGOS
                </div>
            </a>
            </div>
        </div>
    )
}

export default WorkLanding
