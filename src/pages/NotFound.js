import React from "react"

import '../Assets/Styles/404.css'

const NotFound = () => {
    return (
        <div className="notFoundSection">

                <div id="rowThing" className="row row2">
            <div className="col">
                <img alt="Team Members" className="notFoundImage" src="https://www.seekpng.com/png/detail/825-8254341_404-error-not-found.png"/>
            </div>
            <div id="notFoundRow"className="col">
                <h5>Looks like you're lost.
                </h5>
                <h1 className="cardTitle">Error: 404</h1>
                <p>The page you are looking for does not exist. Sorry about that. You can click the button below to go back to the homepage.
                </p>
                <a href="/">
                <button className="btnPosition two">
                    <span>HOME</span>
                </button>
                </a>
            </div>
        </div>
        </div>
    )
}

export default NotFound
