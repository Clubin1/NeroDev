import React from 'react'
import '../Assets/Styles/Contact.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'


const ContactLanding = () => {
    return (
        <div className="contactLanding">
            <h1 className="contactTitle contactSize">Contact Us Below</h1>
            <p className="contactInfo">Call us, email us, send us a query, we'll respond <span className="textColor">quickly!</span></p>
            <p className="contactNumber"> 704-712-3369</p>
        </div>
    )
}

export default ContactLanding
