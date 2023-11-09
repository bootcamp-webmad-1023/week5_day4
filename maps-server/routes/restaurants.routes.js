const express = require('express')
const router = express.Router()

const Restaurant = require('./../models/Restaurant.model')

router.get("/crear", (req, res, next) => {
  res.render("restaurants/create")
})

router.post("/crear", (req, res, next) => {

  const { name, description, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  }

  Restaurant
    .create({ name, description, location })
    .then(() => res.redirect('/'))
    .catch(err => next(err))
})

router.get("/mapa", (req, res, next) => {
  res.render('restaurants/map');
})


module.exports = router
