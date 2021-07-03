import React from 'react'
import ContactForm from './ContactForm'

const ContactSection = () => {
    return (
        <div className="contactSection">
            <div className="contactInfo">
                <h3 className="contactSub">Guranteed same day response!</h3>
                <h1 className="contactTitle">Get Your Free Qoute</h1>
            </div>
            <ContactForm/>
        </div>
    )
}

export default ContactSection
