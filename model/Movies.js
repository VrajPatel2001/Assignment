const mongoose = require('mongoose');

  const { Schema } = mongoose;

  const movieSchema = new Schema({
    type:
    {
        type: String,
        required:true
    },
    name:
    {
        type: String,
        required:true
    },
    description:
    {
        type: String,
        required:true
    },
    b_image:
    {
        type: String,
        required:true
    },
    image:
    {
        type: String,
        required:true
    },
    r_price:
    {
        type: Number,
        required:true
    },
    p_price:
    {
        type: Number,
        required:true
    },
    feature:
    {
        type: Number,
        default: 0
    },
    dateCreate:
    {
        type:Date,
        default:Date.now()
    }
  });

  const movieModel = mongoose.model('Movie',movieSchema);

  module.exports = movieModel;