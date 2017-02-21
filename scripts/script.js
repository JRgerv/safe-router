var models = require('../models/crime');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/seattlecrimereports');
//
// models.Crime.findOne({
//   'zone_beat': 'Q1'
// }, function(err, crime){
//   console.log("err:", err)
//   console.log("crime:", crime)
// })
//
// models.Crime.find({
//   'event_clearance_code': 10
// }, function(err, crime){
//   console.log("err:", err)
//   console.log("crime:", crime)
// })

// models.Crime.find({
//   'latitude': {$gte: 47.5, $lte: 48},
//   'event_clearance_code': 10
// }, function(err, crime){
//   console.log("err:", err)
//   console.log("crime:", crime)
// })

models.Crime.find({
  '$where': 'function(){return this.latitude.toFixed(2) == 47.55}'
}, function(err, crime){
  console.log("err:", err)
  console.log("crime:", crime)
})
