const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller')

router.get('/get_pending_users',adminController.fetchPendingUsers)
router.get('/get_rejected_users',adminController.fetchRejectedUsers)
router.post('/restore_rejected_users',adminController.restoreRejectedUser)
module.exports = router;