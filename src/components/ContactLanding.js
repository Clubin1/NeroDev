import React from 'react'
import '../Assets/Styles/Contact.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'


const ContactLanding = () => {
    return (
        <div className="contactLanding">
            <h1>Contact Us Below</h1>
            <p>From graphic design to web development, we offer a lot of services at NeroDev. Our main thing as an agency is web development, but we also do graphic design.<br></br>
                We can custom make any logos or images fit to your desires to make your company look more professional.</p>
            <div><FontAwesomeIcon className="icon"
                    icon={faPhone}/>
                704-712-3369</div>
        </div>
    )
}

export default ContactLanding
