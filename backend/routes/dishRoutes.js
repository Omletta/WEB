const express = require('express');
const router = express.Router();
const Dish = require('../models/dish.js');

router.get('/', async (req, res) => {
  const dishes = await Dish.find();
  res.json(dishes);
});

module.exports = router;
