var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//Setup Routes

//Index Redirect
router.get("/", function (req, res){
    res.redirect("/index");
});

//Index Page
router.get("/index", function (req, res){
    burger.selectAll(function(data){
        var hbsObject = {burgers: data};
        res.render("index", hbsObject);
    });
});

//Create a New Burger
router.post("/burger/create", function (req, res){
    burger.insertONe(req.body.burger_name, function(){
        res.redirect("/index");
    });
});

//Devour burger
router.post("burger/eat/:id", function (req, res){
    burger.updateOne(req.params.id, function(){
        res.redirect("/index");
    });
});

module.exports = router;