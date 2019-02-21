var express = require("express");

var router = express.Router();

var models = require("../models/burger");

console.log("Router gets the model.");

router.get("/", function (req, res) {
  models.all(function (data) {
    var hbsObject = {
      models: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  models.create([
    "burgerName" 
    // "devoured"
  ], [
      req.body.burgerName
      // req.body.devoured
    ], function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  models.update({
    sleepy: req.body.sleepy
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  models.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;