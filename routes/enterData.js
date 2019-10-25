var db = require("../models");

module.exports = function(app) {
  app.get("/api/enterData", function(req, res) {
    db.enterData.find({}).then(function(dbEnterData) {
      res.json(dbEnterData);
    });
  });

  app.put("/api/enterData/:id", function(req, res) {
    db.enterData.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbEnterData) {
      res.json(dbEnterData);
    });
  });
};