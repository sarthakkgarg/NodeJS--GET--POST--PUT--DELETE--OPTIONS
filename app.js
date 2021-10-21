
const express = require("express");
const app = express();
app.use(express.json());
require("./db/conn");
const User = require("./model/Schema");

// get
app.get("/users", function (req, res) {
  User.find({}, function (err, docs) {
    if (err) res.json(err);
    else res.json(docs);
  });
});

// post
app.post("/users", function (req, res) {
  User.find({}, function (err, docs) {
    if (err) res.json(err);
    else res.json(docs);
  });
});

// put
app.put("/users", function (req, res) {
  User.find({}, function (err, docs) {
    if (err) res.json(err);
    else res.json(docs);
  });
});

// delete
app.delete("/users", function (req, res) {
  User.find({}, function (err, docs) {
    if (err) res.json(err);
    else res.json(docs);
  });
});

// options
app.options("/users", function (req, res) {
  User.find({}, function (err, docs) {
    if (err) res.json(err);
    else res.json(docs);
  });
});

app.listen(8000, () => console.log("Server started on port 8000"));
