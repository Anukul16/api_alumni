const express = require('express');
const router = express.Router();
const userLikeController = require("../controllers/userlike.controller")

router.post('/like_alumni',userLikeController.likeAlumni)
router.post('/fetch_liked_alumni',userLikeController.fetchLikeAlumniIds)
router.post('/unlike_alumni',userLikeController.unlikeAlumni)
router.post('/fetch_followers',userLikeController.fetchFollowers)
router.post('/fetch_following',userLikeController.fetchFollowing)
router.post('/count_followers',userLikeController.countFollowers)
router.post('/count_following',userLikeController.countFollowing)
module.exports = router;