import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function Contact() {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gqsgjmh', 'template_qubcgjo', form.current, '9Q8ceKiNiuPxO443_')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
            </div>
            <div className="blur s-blur1"
            style={{ background:'#abf1ff94' }}></div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="user" placeholder='Name' />
                <input type="email" name="user_email" className="user" placeholder='Email' />
                <textarea name="message" className="user" placeholder="Message" />
                <input type="submit" className="button"  /> 
                <span>{done && 'Thank you for contacting me!, I will get back to you shortly.'}</span>
                <div className="blur c-blur1"
                style={{background:"var(--purple)"}}>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact