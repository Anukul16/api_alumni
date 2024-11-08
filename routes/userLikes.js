const express = require('express');
const router = express.Router();
const userLikeController = require("../controllers/userlike.controller")

router.post('/like_alumni',userLikeController.likeAlumni)
router.post('/fetch_liked_alumni',userLikeController.fetchLikeAlumniIds)
router.post('/unlike_alumni',userLikeController.unlikeAlumni)
module.exports = router;