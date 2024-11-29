const express = require('express');
const router = express.Router();
const userLoginController = require("../controllers/user.controller");
// const kycController = require('../controllers/kyc.controller')

/* GET home page. */
router.post('/fetch_user',userLoginController.fetch_user)
router.post('/fetch_profile',userLoginController.fetchProfile)
router.post('/login', userLoginController.login);
router.post('/register',userLoginController.register)
router.post('/edit_profile',userLoginController.editProfile)
router.post('/delete_profile_pic',userLoginController.deleteProfilePicture)
router.post('/delete_cover_pic',userLoginController.deleteCoverPicture)

router.post('/getAllUserOfACompany' ,userLoginController.allEmployeeOfACompany)
router.post('/getBatchWise' ,userLoginController.batchWise)
router.post('/techStackWise' , userLoginController.techStackWise)
router.post('/getAllCompanyName' ,userLoginController.allCompanyName)
router.post('/getAllAlumni' ,userLoginController.allAlumni)
router.post('/getAllBatchYears' ,userLoginController.allBatchYears)
router.post('/getAllTechStacks' , userLoginController.allTechStack)
router.post('/logout', userLoginController.logout)

module.exports = router;