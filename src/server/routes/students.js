var express = require('express');
var router = express.Router();
var Students = require('../models/students');

router.get('/', function(req, res, next) {
 Students.find({}, function(err, students) {
   if(err) {
     return next(err);
   }
   res.status(200).json({
   status: 'success',
   data: students
 });
 });
 
});

router.get('/:id', function(req, res, next) {
 var studentID = req.params.id;
 Students.findById(studentID, function(err, student) {
   if(err) {
     return next(err);
   }
   res.status(200).json({
   status: 'success',
   data: student
 });
 });
 
});

router.put('/:id', function(req, res, next) {
 var studentID = req.params.id;
 Students.findByIdAndUpdate(studentID, req.body, {new: true},
  function(err, student) {
   if(err) {
     return next(err);
   }
   res.status(200).json({
   status: 'success',
   data: student
 });
 });
 
});

router.delete('/:id', function(req, res, next) {
 var studentID = req.params.id;
 Students.findByIdAndRemove(studentID,
  function(err, student) {
   if(err) {
     return next(err);
   }
   res.status(200).json({
   status: 'success',
   data: student
 });
 });
 
});
module.exports = router;