import React, { useState } from 'react';
import styles from './contact.module.scss';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { name, email, message };

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Email envoyé:', data);
            } else {
                console.log('Erreur:', data.message);
            }
        } catch (error) {
            console.log('Erreur lors de l\'envoi:', error);
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className={styles.contactBackground}>
            <div className={styles.contactContainer}>
                <h2 className={styles.title}>CONTACT</h2>
                <div className={styles.separator}></div>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <label htmlFor="name">Nom:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={styles.inputField}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.inputField}
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className={styles.textareaField}
                    />

                    <button type="submit" className={styles.submitButton}>Envoyer</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
