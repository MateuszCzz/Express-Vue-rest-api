const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const castleSchema = new Schema({
  name: String,
  location: String,
  description: String,
  image: String,
  yearBuilt: Number,
  architecturalStyle: String,
  openingHours: String,
  admissionFee: Number
});

// Create and export the Castle model
module.exports = mongoose.model('Castle', castleSchema);
