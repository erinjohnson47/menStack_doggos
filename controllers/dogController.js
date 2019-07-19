 const Dogs = require('../models/Dogs');
 const mongoose = require('mongoose');

 const dogController = {
    new: (req, res) => {
        res.render('new.ejs')
        },
    create: (req, res) => {
        if(req.body.isFixed === 'on') {
            req.body.isFixed = true;
        } else {
            req.body.isFixed = false;
        }
        if(req.body.isGood === 'on') {
            req.body.isGood = true;
        } else {
            req.body.isGood = false;
        }
        Dogs.create(req.body, (err, createDog) => {
            console.log(createDog, '<--post route/dogs, createDog')
            if(err) {
                res.send(err)
            } else {
                res.redirect('/dogs')
            }
        })
    }, 
    showDogs: (req, res) => {
        Dogs.find({}, (err, dogs) => {
            if (err) {
                res.send(err);
            } else {
            console.log(dogs, "<--find/get")
            res.render('index.ejs', {
                dogs: dogs
            })
        }
        })
    },
    showOneDog: (req, res) => {
        Dogs.findById(req.params._id, (err, dog) => {
            if(err) {
                res.send(err) 
            } else {
            res.render('show.ejs', {
                dog : dog
            })
            }
        })
    }
};

module.exports = dogController;