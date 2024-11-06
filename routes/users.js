const express = require('express');
const router = express.Router();
const userLoginController = require("../controllers/user.controller");
// const kycController = require('../controllers/kyc.controller')

/* GET home page. */
router.post('/fetch_user',userLoginController.fetch_user)
router.post('/login', userLoginController.login);
router.post('/register',userLoginController.register)
router.post('/edit_profile',userLoginController.editProfile)
router.post('/logout', userLoginController.logout)

module.exports = router;