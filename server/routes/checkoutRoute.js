
const express = require("express");
const { checkoutHandler } = require("../controllers/checkout");

const router = express.Router();


router.route("/create-checkout-session").post(checkoutHandler)

module.exports = router;