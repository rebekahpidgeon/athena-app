const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
var employer = require("../models/employer.js");
var Employer = require("../models/employer.js").model('Employer');

//all values that use req.params grab the value or values stated in the url

/* GET ALL Cart data */
router.get('/getAll', function(req, res, next) {
    employer.find(function (err, employers) {
      if (err) return next(err);
      res.json(employers);
    });
   });

/* GET ONE cart BY _ID */
router.get("/getID/:id", function(req, result, next) {
    employer.findById(req.params.id, function (err, post) {//req.params.id is getting the value stated in the url
        if (err) return next (err);
        result.json(post)
    });
});

/* GET ONE cart BY cart */
router.get("/getEmployerCompany/:employerCompany", function(req, result, next) {
    employer.find({employerCompany: req.params.employerCompany}, function (err, post) {
        if (err) return next (err);
        result.json(post)
    });
});

//get ONE cart BY userid
router.get("/getEmployerName/:employerName", function(req, result, next) {
    employer.find({employerName: req.params.employerName}, function (err, post) {
        if (err) return next (err);
        result.json(post)
    });
});

module.exports = router;