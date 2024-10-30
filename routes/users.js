const express = require('express');
const router = express.Router();
const userLoginController = require("../controllers/user.controller");
const kycController = require('../controllers/kyc.controller')

/* GET home page. */
router.post('/login', userLoginController.login);
router.post('/logout', userLoginController.logout)

module.exports = router;