import { send } from "emailjs-com";
import React, { useState } from "react";
import './Contact.scss';

const initialValue = {
    name: '',
    mail: '',
    message: '',
}

function Contact() {
    const [toSend, setToSend] = useState(initialValue);
    const [mailError, setMailError] = useState(false);

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
        <section className="contact">
            <h1>Me Contacter</h1>
            <form onSubmit={onSubmit}>
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
                <textarea
                    name="message"
                    placeholder="Vos besoins."
                    value={toSend.message}
                    onChange={handleChange}
                />
                <button type="submit">Envoyer</button>
            </form>
        </section>
    )
}

export default Contact;