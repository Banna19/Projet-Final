const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST : Créer un contact
router.post('/', async (req, res) => {
    const contact = new Contact(req.body);
    try {
        await contact.save();
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET : Récupérer tous les contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
