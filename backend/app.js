const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Définir les options CORS
const corsOptions = {
    origin: 'https://mikelocks.onrender.com', // Remplace par l'URL de ton frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

// Appliquer la configuration CORS
app.use(cors(corsOptions));

// Middleware pour parser le corps de la requête en JSON
app.use(bodyParser.json());

// Route pour gérer l'envoi de l'e-mail
app.post('/send-email', async (req, res) => {
    console.log('POST /send-email reçu'); // Log pour vérifier que la route est atteinte
    console.log('Body:', req.body); // Log pour afficher le contenu du corps de la requête

    const { name, email, message } = req.body;

    // Vérification des valeurs reçues
    if (!name || !email || !message) {
        console.log('Erreur : Données manquantes');
        return res.status(400).json({ message: 'Nom, email ou message manquants.' });
    }

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, // Ou utilise 587 si nécessaire
        secure: true, // True si le port est 465
        auth: {
            user: process.env.EMAIL_USER, // Assurez-vous que cette variable est correcte
            pass: process.env.EMAIL_PASS, // Assurez-vous que cette variable est correcte
        },
    });

    // Définition des options de l'e-mail
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Ton adresse email
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    console.log('Tentative d\'envoi de l\'email...'); // Log pour vérifier que Nodemailer est appelé

    // Envoi de l'e-mail via Nodemailer
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email envoyé:', info); // Log si l'email est envoyé avec succès
        res.status(200).json({ message: 'Email envoyé avec succès!' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error); // Log en cas d'erreur
        res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
});

// Exporter l'application
module.exports = app;
