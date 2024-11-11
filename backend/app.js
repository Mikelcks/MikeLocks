const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const corsOptions = {
    origin: 'https://mikelocks.onrender.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

// Appliquer la configuration CORS
app.use(cors(corsOptions));

// Middleware pour parser le corps de la requête en JSON
app.use(bodyParser.json());

// Route pour gérer l'envoi de l'e-mail
app.post('/send-email', async (req, res) => {
    console.log('POST /send-email reçu');
    console.log('Body:', req.body);

    const { name, email, message } = req.body;

    // Vérification des valeurs reçues
    if (!name || !email || !message) {
        console.log('Erreur : Données manquantes');
        return res.status(400).json({ message: 'Nom, email ou message manquants.' });
    }

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Définition des options de l'e-mail
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    console.log('Tentative d\'envoi de l\'email...');

    // Envoi de l'e-mail via Nodemailer
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email envoyé:', info);
        res.status(200).json({ message: 'Email envoyé avec succès!' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
});

// Exporter l'application
module.exports = app;
