const express = require('express');
const router = express.Router();

const Restaurant = require('./../models/Restaurant.model')

router.get("/restaurants", (req, res, next) => {

  Restaurant
    .find()
    .then(restaurants => res.json(restaurants))
    .catch(err => res.status(500).json({ message: 'Server issue D:', errorDetails: err }))
})

module.exports = router