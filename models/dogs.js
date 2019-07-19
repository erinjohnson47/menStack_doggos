const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    paws: { type: Number, default: 4},
    color: String,
    isFixed: Boolean,
    breed: String,
    isGood: { type: Boolean, default: true },
    favoriteToys: [String]
})

const Dogs = mongoose.model('Dog', dogSchema);

module.exports = Dogs;

//model is object that connects to db, schema defines what model should look like