const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
var employee = require("../models/employee.js");
var Employee = require("../models/employee.js").model('Employee');

//all values that use req.params grab the value or values stated in the url

/* GET ALL Cart data */
router.get('/getAll', function(req, res, next) {
    employee.find(function (err, employees) {
      if (err) return next(err);
      res.json(employees);
    });
   });

/* GET ONE cart BY _ID */
router.get("/getID/:id", function(req, result, next) {
    employee.findById(req.params.id, function (err, post) {//req.params.id is getting the value stated in the url
        if (err) return next (err);
        result.json(post)
    });
});

//get ONE cart BY userid
router.get("/getEmployeeName/:employeeName", function(req, result, next) {
    employee.find({employeeName: req.params.employeeName}, function (err, post) {
        if (err) return next (err);
        result.json(post)
    });
});

/* GET ONE cart BY cart */
router.get("/getEmployerID/:employerID", function(req, result, next) {
    employee.find({employerID: req.params.employerID}, function (err, post) {
        if (err) return next (err);
        result.json(post)
    });
});

//get movies in the cart
router.get("/getTagIDs/:tagIDs", function(req, result, next) {
    employee.find({tagIDs: req.params.tagIDs}, function (err, post) {
        if (err) return next (err);
        result.json(post)
    });
});

module.exports = router;