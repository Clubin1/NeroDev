import React from 'react'

const ContactForm = () => {
    return (<div>
        <div id="contact-wrapper">
            <div class="contact-container">
                <form id="con">

                    <fieldset>
                        <input type='hidden' name='contact_number'/>

                        <input name="user_name" placeholder="Your name" type="text" tabindex="1" required autofocus/>
                    </fieldset>
                    <fieldset>
                        <input name="user_email" placeholder="Your Email Address" type="email" tabindex="2" required/>
                    </fieldset>
                    <fieldset>
                    <input name="service_type" placeholder="Service Type" type="text" tabindex="1" required autofocus/>
                    </fieldset>
                    <fieldset>
                        <textarea name="message" placeholder="Type your message here...." tabindex="5" type="message" required></textarea>
                    </fieldset>
                    <fieldset>
                        <div id="conbtn" className="button contactButton">
                            <span>SUBMIT MESSAGE</span>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>


    </div>)
}

export default ContactForm
