var express = require('express');
var app = express();
var musicRouter = express.Router();
var Query = require('../db/query.js');
var query = new Query();

musicRouter.get('/', function(req, res) {
  query.all(function(docs){
    res.json(docs);
    console.log(docs)    
  });
});

module.exports = musicRouter;