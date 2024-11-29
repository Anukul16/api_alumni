const express = require('express');
const router = express.Router();
const {upload,uploadGalleryImages } = require('../controllers/upload.controller');
const uploadController = require('../controllers/upload.controller')

router.post('/upload', upload.single('file'), uploadController.uploadFile);

router.post('/upload_gallery_images',uploadGalleryImages.array('images', 10),uploadController.uploadGallery);
module.exports = router;
