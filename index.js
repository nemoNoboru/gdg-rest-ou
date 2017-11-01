const tiny = require('tiny')
const express = require('express')
const addPushFeature = require('./pusher.js')
const addGetterFeature = require('./getter.js')

tiny('db.tiny', function (err, db) {
  if (!err) {
    startRest(db)
  } else {
    console.error('Could not start tiny')
  }
})

function startRest (db) {
  var app = express()
  var bodyParser = require('body-parser')
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.db = db
  addPushFeature(app)
  addGetterFeature(app)

  app.listen(3300)
}
