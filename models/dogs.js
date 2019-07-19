const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: String,
    sex: String,
    isFixed: Boolean,
    breed: String,
    isGood: { type: Boolean, default: true },
    favoriteToys: String //to create an array instead of a single string, insert instructions in form to indicate how to separate toys (i.e. ',' or ';' and create a function that splices the string to an array using that character as a separator)
})

const Dogs = mongoose.model('Dog', dogSchema);

module.exports = Dogs;

//model is object that connects to db, schema defines what model should look like