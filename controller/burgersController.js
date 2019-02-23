var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

console.log("Model is connected to the router.");

//=======================================Routes==========================================
// ------------------- html route(s) --------------------
router.get("/", function (req, res) {
  burger.all(function (result) {
    console.log({burgers : result});
    res.render("index", {burgers : result});
  });
});

// ------------------- api route(s) --------------------
router.get("/api/burgers", function (req, res) {
  var condition = "id = " + req.params.id;
    burger.all(condition, function (result) {
        res.json({burgers : result});
    });
});

router.post("/api/burgers", function (req, res) {
  burger.create("burger_name", req.body.burger_name, function (result) {
      res.json({burgers : result});
    });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition : ", condition);
    burger.update({
      devoured: 1
    },condition, function (result) {
          if (result.changedRows == 0) {
            return res.status(500).end();
          } 
          else {
          res.status(200).end();
          }
          console.log({burgers : result});
          // res.json({burgers : result});
      });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } 
    else {
      res.status(200).end();
    }
    //res.json({burgers : result});
  });
});

module.exports = router;