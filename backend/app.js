const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Configuration CORS
const corsOptions = {
    origin: ['https://mikelocks.onrender.com', 'http://localhost:3000'], // Permet les requêtes de ces origines
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200, // Pour certains navigateurs qui ne gèrent pas bien les codes 204
};

// Ajout de CORS à l'application
app.use(cors(corsOptions));
app.options('/send-email', cors(corsOptions));

app.use(bodyParser.json());

// Route pour gérer l'envoi de l'email
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        debug: true, // Active le mode débogage pour Nodemailer
        logger: true // Active les logs de Nodemailer
    });

    // Définition des options de l'email
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Envoi de l'email via Nodemailer
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email envoyé avec succès!' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        res.status(500).json({
            message: 'Erreur lors de l\'envoi de l\'email',
            error: error.message // Envoi du message d'erreur pour déboguer
        });
    }
});

module.exports = app;
