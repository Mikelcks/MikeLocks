const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Définir les options CORS
const corsOptions = {
    origin: ['https://mikelocks.onrender.com', 'https://mikelocks.onrender.com/contact'],
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
    
    // Log des données reçues dans la requête
    console.log('Requête reçue:', req.body);

    // Vérification si toutes les données nécessaires sont présentes
    if (!name || !email || !message) {
        console.log('Erreur: Données manquantes dans la requête.');
        return res.status(400).json({ message: 'Données manquantes dans la requête' });
    }

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,  // Assurez-vous que "secure" est à true si tu utilises le port 465
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        logger: true,  // Active le logger pour Nodemailer
        debug: true,   // Active les logs détaillés pour Nodemailer
    });

    // Log de la configuration du transporteur
    console.log('Transporteur Nodemailer configuré avec :', {
        host: 'smtp.gmail.com',
        port: 465,
        user: process.env.EMAIL_USER,
        secure: true,
    });

    // Définition des options de l'e-mail
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Log des options d'e-mail
    console.log('Options de l\'email:', mailOptions);

    // Envoi de l'e-mail via Nodemailer
    try {
        console.log('Tentative d\'envoi de l\'email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email envoyé:', info);

        // Réponse après envoi réussi
        res.status(200).json({ message: 'Email envoyé avec succès!' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
});

// Exporter l'application
module.exports = app;
