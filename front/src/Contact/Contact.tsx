import { send } from "emailjs-com";
import React, { useState } from "react";
import memoji from '../components/assets/memoji/memoji_contact.png';
import useNav from "../hooks/useNav";
import './Contact.scss';

const initialValue = {
    name: '',
    mail: '',
    message: '',
}

function Contact() {
    const [toSend, setToSend] = useState(initialValue);
    const [mailError, setMailError] = useState(false);

    const contactRef = useNav("Contact");

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.currentTarget.name == 'mail') {
            if (!isValidEmail(e.currentTarget.value))
                setMailError(true);
            else
                setMailError(false);
        }
        setToSend({...toSend, [e.currentTarget.name]: e.currentTarget.value});
    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        send(
            'service_i3vvk0v',
            'template_uxk819j',
            toSend,
            'AIu-wvoCLFzBIOL7b'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setToSend(initialValue);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <section ref={contactRef} className="contact" id="contact">
                <div className="form-title">
                    <h1>Me Contacter</h1>
                    <form onSubmit={onSubmit}>
                        <div className="name-mail">
                            <input
                                type='text'
                                name="name"
                                placeholder="Nom"
                                value={toSend.name}
                                onChange={handleChange}
                            />
                            <input
                                type='text'
                                name="mail"
                                placeholder="E-mail"
                                value={toSend.mail}
                                onChange={handleChange}
                                className={`${mailError ? "err" : "not-err"}`}
                            />
                        </div>
                            <textarea
                                name="message"
                                placeholder="Vos besoins."
                                value={toSend.message}
                                onChange={handleChange}
                            />
                            <button type="submit">Envoyer</button>
                    </form>
                </div>
                <div className="face">
                    <img src={memoji} alt="memoji" />
                    <svg viewBox="0 0 596 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M548.099 30.902C600.684 75.397 605.538 178.949 582.077 272.793C557.807 366.637 505.222 450.773 430.794 485.56C356.366 519.538 259.286 504.167 175.15 462.908C91.014 422.458 19.013 356.12 3.64195 280.074C-11.729 204.028 30.339 118.274 88.587 72.161C146.835 26.048 222.072 21.194 308.635 11.486C396.007 0.968979 495.514 -13.593 548.099 30.902Z" fill="url(#paint0_linear_5_191)"/>
                        <defs>
                        <linearGradient id="paint0_linear_5_191" x1="0.450195" y1="504.205" x2="497.212" y2="-82.6773" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F87537"/>
                        <stop offset="1" stopColor="#FBA81F"/>
                        </linearGradient>
                        </defs>
                    </svg>

                </div>
        </section>
    )
}

export default Contact;