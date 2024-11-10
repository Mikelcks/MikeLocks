import React, { useState } from 'react';
import styles from './contact.module.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Expression régulière pour valider l'email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Fonction de validation
    const validateEmail = (email) => {
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation de l'email
        if (!validateEmail(email)) {
            MySwal.fire({
                title: "Erreur",
                text: "L'email fourni n'est pas valide.",
                icon: "error",
                confirmButtonText: "OK",
                confirmButtonColor: "orange",
                width: "400px",
                padding: "20px",
                customClass: {
                    popup: 'custom-alert',
                },
                didOpen: () => {
                    setTimeout(() => {
                        const popup = document.querySelector('.swal2-popup');
                        if (popup) {
                            popup.style.display = 'flex';
                            popup.style.flexDirection = 'column';
                            popup.style.justifyContent = 'center';
                            popup.style.alignItems = 'center';
                            popup.style.textAlign = 'center';

                            const title = document.querySelector('.swal2-title');
                            if (title) {
                                title.style.padding = '5px';
                            }
                        }
                    }, 0); // Applique le style immédiatement après le rendu
                }
            });
            return; // Empêche l'envoi du formulaire si l'email est invalide
        }

        const formData = { name, email, message };

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                MySwal.fire({
                    title: "Message envoyé !",
                    text: "Votre message a bien été envoyé.",
                    icon: "success",
                    confirmButtonText: "OK",
                    confirmButtonColor: "orange",
                    width: "400px", 
                    padding: "20px", 
                    customClass: {
                        popup: 'popup-container' 
                    },
                    didOpen: () => {
                        setTimeout(() => {
                            const popup = document.querySelector('.swal2-popup');
                            if (popup) {
                                popup.style.display = 'flex';
                                popup.style.flexDirection = 'column';
                                popup.style.justifyContent = 'center';
                                popup.style.alignItems = 'center';
                                popup.style.textAlign = 'center';

                                const title = document.querySelector('.swal2-title');
                                if (title) {
                                    title.style.padding = '5px';
                                }
                            }
                        }, 0); // Applique le style immédiatement après le rendu
                    }
                });
            } else {
                MySwal.fire({
                    title: "Erreur",
                    text: "Erreur lors de l'envoi du message. Vous pouvez prendre contact avec moi directement a l'adresse mail suivante : mikelcks57@gmail.com",
                    icon: "error",
                    confirmButtonText: "OK",
                    confirmButtonColor: "orange",
                    width: "400px",
                    padding: "20px",
                    customClass: {
                        popup: 'custom-alert',
                    },
                    didOpen: () => {
                        setTimeout(() => {
                            const popup = document.querySelector('.swal2-popup');
                            if (popup) {
                                popup.style.display = 'flex';
                                popup.style.flexDirection = 'column';
                                popup.style.justifyContent = 'center';
                                popup.style.alignItems = 'center';
                                popup.style.textAlign = 'center';

                                const title = document.querySelector('.swal2-title');
                                if (title) {
                                    title.style.padding = '5px';
                                }
                            }
                        }, 0); // Applique le style immédiatement après le rendu
                    }
                });
            }
        } catch (error) {
            MySwal.fire({
                title: "Erreur",
                text: "Erreur lors de l'envoi du message. Vous pouvez prendre contact avec moi directement a l'adresse mail suivante : mikelcks57@gmail.com",
                icon: "error",
                confirmButtonText: "OK",
                confirmButtonColor: "orange",
                width: "400px",
                padding: "20px",
                customClass: {
                    popup: 'custom-alert',
                },
                didOpen: () => {
                    setTimeout(() => {
                        const popup = document.querySelector('.swal2-popup');
                        if (popup) {
                            popup.style.display = 'flex';
                            popup.style.flexDirection = 'column';
                            popup.style.justifyContent = 'center';
                            popup.style.alignItems = 'center';
                            popup.style.textAlign = 'center';

                            const title = document.querySelector('.swal2-title');
                            if (title) {
                                title.style.padding = '5px';
                            }
                        }
                    }, 0); // Applique le style immédiatement après le rendu
                }
            });
        }

        // Réinitialisation des champs
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
