const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
var tag = require("../models/tag.js");
var Tag = require("../models/tag.js").model('Tag');

//all values that use req.params grab the value or values stated in the url

/* GET ALL Cart data */
router.get('/getAll', function(req, res, next) {
    tag.find(function (err, tags) {
      if (err) return next(err);
      console.log(tags);
      res.json(tags);
    });
   });

/* GET ONE cart BY _ID */
router.get("/getID/:id", function(req, result, next) {
    tag.findById(req.params.id, function (err, post) {//req.params.id is getting the value stated in the url
        if (err) return next (err);
        result.json(post)
    });
});

/* GET ONE cart BY cart */
router.get("/getTagName/:tagName", function(req, result, next) {
    tag.find({tagName: req.params.tagName}, function (err, post) {
        if (err) return next (err);
        result.json(post)
    });
});

module.exports = router;