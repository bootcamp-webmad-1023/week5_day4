const { Schema, model } = require('mongoose')

const restaurantSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  location: {                                           // atencion
    type: {
      type: String
    },
    coordinates: {
      type: [Number]
    }
  }

})

restaurantSchema.index({ location: '2dsphere' })        // atencion

const Restaurant = model('Restaurant', restaurantSchema)

module.exports = Restaurant