import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';

init("user_NGIY2EDUOHQaeN37cQdIT");

const ContactForm = () => {
    const { register, handleSubmit} = useForm();
    const [contactNumber, setContactNumber] = useState("000000");
    const [statusMessage, setStatusMessage] = useState("");

    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
      }
      const onSubmit = (data) => {
        const form = document.querySelector('#con')
        console.log(data);
        generateContactNumber();
        sendForm('default_service', 'template_7p3j5tq', '#con')
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            form.reset();
            setStatusMessage("Message sent!");
            setTimeout(()=> {
            }, 5000)
          }, function(error) {
            console.log('FAILED...', error);
            setStatusMessage("Failed to send message! Please try again later.");
            setTimeout(()=> {
            }, 5000)
          });
      }

    return (<div>
        <div id="contact-wrapper">
            <div class="contact-container">
                <form onSubmit={handleSubmit(onSubmit)} id="con">
                <h6 className='status-message'>{statusMessage}</h6>

                    <fieldset>
                    <input type='hidden' name='contact_number' value={contactNumber} />

                    <input name="user_name" {...register("user_name")} placeholder="Your Name" type="text" tabindex="1" required autofocus/>
                    </fieldset>
                    <fieldset>
                    <input name="user_email" {...register("user_email")} placeholder="Your Email Address" type="email" tabindex="1" required/>
                    </fieldset>
                    <fieldset>
                    <input name="service" {...register("service")} placeholder="Service Type" type="text" tabindex="1" required autofocus/>
                    </fieldset>
                    <fieldset>
                    <textarea name="message" {...register("message")} placeholder="Type Your Message Here...." tabindex="5" type="message" required></textarea>
                    </fieldset>
                  <fieldset>
                    <button name="submit" type="submit" id="conbtn" className="button contactButton"data-submit="...Sending">Submit a message</button>
                </fieldset>
                </form>
            </div>
        </div>


    </div>)
}

export default ContactForm
