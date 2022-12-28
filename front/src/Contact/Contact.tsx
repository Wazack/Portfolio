import { send } from "emailjs-com";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import useNav from "../hooks/useNav";
import './Contact.scss';

const initialValue = {
    name: '',
    mail: '',
    message: '',
}

function Contact() {
    const [toSend, setToSend] = useState(initialValue);
    const [count, setCount] = useState(0);
    const [nameError, setNameError] = useState('');
    const [mailError, setMailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const contactRef = useNav("Contact");

    function isValidEmail(email: string) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.currentTarget.name == 'mail') {
            if (isValidEmail(e.currentTarget.value))
                setMailError('');
        }
        else if (e.currentTarget.name == 'name') {
            if (e.currentTarget.value.length >= 3) 
                setNameError('');
        }
        else if (e.currentTarget.name == 'message') {
            if (e.currentTarget.value.length >= 50) 
                setMessageError('');
        }
        setToSend({...toSend, [e.currentTarget.name]: e.currentTarget.value});
    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const validEmail = isValidEmail(toSend.mail);
        const lengthName = toSend.name.length < 3;
        const lengthMessage = toSend.message.length < 50;
        if (!validEmail) {
            setMailError('err')
            enqueueSnackbar('Email Invalide !');
        }
        if (lengthName) {
            setNameError('err');
            enqueueSnackbar('Votre nom est trop court ! (minimum 3 caratères)');
        }
        if (lengthMessage) {
            setMessageError('err');
            enqueueSnackbar('Votre message est trop court ! (minimum 50 caractères)');
        }
        if (validEmail && !lengthName && !lengthMessage) {
            send(
                'service_i3vvk0v',
                'template_uxk819j',
                toSend,
                'AIu-wvoCLFzBIOL7b'
            )
                .then(() => {
                    enqueueSnackbar('Le message a bien été envoyé !', { variant: 'success' });
                    setToSend(initialValue);
                    setCount(0);
                })
                .catch(() => {
                    enqueueSnackbar('Le message n\'a pas réussi à être envoyé !');
                });
        }
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
                                className={nameError}
                                onChange={handleChange}
                            />
                            <input
                                type='text'
                                name="mail"
                                placeholder="E-mail"
                                value={toSend.mail}
                                onChange={handleChange}
                                className={mailError}
                            />
                        </div>
                            <textarea
                                name="message"
                                maxLength={2000}
                                placeholder="Vos besoins."
                                value={toSend.message}
                                className={messageError}
                                onChange={ (e) => {handleChange(e); setCount(e.target.value.length)} }
                            />
                            <p>{count} / 2000</p>
                            <button type="submit">Envoyer</button>
                    </form>
                </div>
        </section>
    )
}

export default Contact;