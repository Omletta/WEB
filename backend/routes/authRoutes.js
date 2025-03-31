const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST /api/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Identifiant ou mot de passe incorrect.' });
    }

    res.json({ message: 'Connexion réussie' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
