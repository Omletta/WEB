const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Connect to the correct collection
const menuSchema = new mongoose.Schema({}, { strict: false });
const Menu = mongoose.model('scrapped_menu', menuSchema, 'scrapped_menu');

const getTodayFormatted = () => {
    const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const months = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];

    const today = new Date();
    const day = days[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    return `${day} ${date} ${month} ${year}`;
};

router.get('/menu/today', async (req, res) => {
    const todayStr = getTodayFormatted();

    try {
        const data = await Menu.find({ date: todayStr });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch today\'s menu' });
    }
});

module.exports = router;
