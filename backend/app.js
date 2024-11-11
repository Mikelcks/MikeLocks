const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Définir les options CORS
const corsOptions = {
    origin: 'https://votre-frontend.com', // Remplacez par l'URL de votre frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

// Appliquer la configuration CORS
app.use(cors(corsOptions));

// Middleware pour parser le corps de la requête en JSON
app.use(bodyParser.json());

// Route pour gérer l'envoi de l'e-mail
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true pour le port 465, false pour les autres ports
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

    // Envoi de l'e-mail via Nodemailer
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email envoyé avec succès!' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
});

// Exporter l'application
module.exports = app;
