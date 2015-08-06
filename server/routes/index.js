var express = require('express');
var router = express.Router();

var preAdjective = require("../public/data/preadjective/preadjective.json");
var adjective = require("../public/data/adjective/adjective.json");
var noun = require("../public/data/noun/noun.json");

var path = require("path");

router.get("/data/preadjective", function(req, res){
    res.json(preAdjective);
});
router.get("/data/adjective", function(req, res){
    res.json(adjective);
});
router.get("/data/noun", function(req, res){
    res.json(noun);
});

router.get("/*", function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;