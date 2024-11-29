const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller')

router.get('/get_pending_users',adminController.fetchPendingUsers)
router.get('/get_rejected_users',adminController.fetchRejectedUsers)
router.post('/restore_rejected_users',adminController.restoreRejectedUser)

router.get('/get_sections',adminController.getAllSections)
router.post('/get_years',adminController.getYearsBySection)
router.post('/get_images',adminController.getImages)

router.post('/accept_user',adminController.acceptUser)
router.post('/reject_user',adminController.rejectUser)

module.exports = router;