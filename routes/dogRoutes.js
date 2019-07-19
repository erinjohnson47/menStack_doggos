const express = require('express');
const router = express.Router();
const dogController = require('../controllers/dogController');

router.get('/new', dogController.showNew);

module.exports = router;

//express writes code for nodes in javascript, mongoose talks to database - require express in the js routes files, require mongoose in the database files

//server --> routes --> controller --> model