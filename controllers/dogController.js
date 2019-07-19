 const Dogs = require('../models/Dogs');
 const mongoose = require('mongoose');

 const dogController = {
    showNew: (req, res) => {
        res.render('new.ejs')
        }
};

module.exports = dogController;