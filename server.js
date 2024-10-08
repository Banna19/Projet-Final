const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Pour servir les fichiers statiques (HTML, CSS, images)

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost/casa_shoes')
    .then(() => {
        console.log('MongoDB connecté');
    })
    .catch(err => console.log(err));

// Routes
app.use('/api/contacts', contactRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
