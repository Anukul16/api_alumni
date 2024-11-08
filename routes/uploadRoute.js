const express = require('express');
const router = express.Router();
const {upload } = require('../controllers/upload.controller');
const uploadController = require('../controllers/upload.controller')

router.post('/upload', upload.single('file'), uploadController.uploadFile);
module.exports = router;
