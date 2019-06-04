var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js")

//linking to index.handlebars content
router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data);
        res.render('./index', { burger_data });
    })

})

router.put('/burgers/update', function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        res.redirect('/');
    })
})

//Post
router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect('/');
    })
})
module.exports = router;