const express = require("express");
const router = express.Router();


const limiter = require("../middleware/rate-limit"); 

const strengthCheck = require("../middleware/strength-check"); 
const emailCheck = require("../middleware/email-check");
const userCtrl = require("../controllers/user");

router.post("/signup", emailCheck, strengthCheck, userCtrl.signup);
router.post("/login", limiter, userCtrl.login);

module.exports = router;