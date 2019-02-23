// Import MySQL connection.
var connection = require("../config/connection.js");

console.log("ORM is connected to DB.");

// Object for all our SQL statement functions.
var orm = {
    all: function(table, cb) {
      var queryString = `SELECT * FROM  ${table}`;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    insertOne: function(table, cols, vals, cb) {
      var queryString = `INSERT INTO ${table} (${cols}) VALUES (?)`;
      console.log(queryString);
      connection.query(queryString, [vals], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    updateOne: function(table, condition, cb) {
      var queryString = ` UPDATE ${table} SET devoured = ${0} WHERE ${condition}`;
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    delete: function(table, condition, cb) {
        var queryString = `DELETE FROM ${table} WHERE  ${condition}`;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
   
  };
  

  // Export the orm object for the model (cat.js).
  module.exports = orm;
  