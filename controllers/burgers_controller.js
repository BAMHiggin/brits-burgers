const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        let handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject);
    });
});

router.post("/api/burgers/", function (req, res) {
    burger.create([
        "burger_name"  /*, "devour" */
    ], [
            req.body.burger_name, 0
        ], function (result) {
            
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    // console.log("condition", condition);

    burger.update({
        devoured: true
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// 
module.exports = router;