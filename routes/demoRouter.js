const express = require("express");
const router = express.Router();
const {sayHello} = require("../controllers/demoController");

router.route("/").get(sayHello);

module.exports = router;