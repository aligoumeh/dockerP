const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('./database')
const controller = require('./model/person_controller')


// Setup the body parser
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * REST routings for the persons
 */
app.get('/api/person', function(req, res) {
    controller._getAll( result => {
      var response = {
        "serverLocalAddress" : req.connection.localAddress,
        "persons" : result
      }

      res.json(response)
    })
});

app.get('/api/person/:id', function(req, res) {
    controller._getPerson(req.params.id, result => { 
      var response = {
        "serverLocalAddress" : req.connection.localAddress,
        "personDetails" : result
      }
      
      res.json(response)
    })
});

module.exports = app;
