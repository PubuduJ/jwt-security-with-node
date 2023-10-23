const express = require("express");
const router = express.Router();
const {register, authenticate} = require("../controllers/authController");

router.route("/register").post(register);
router.route("/authenticate").post(authenticate);

module.exports = router;