const express = require("express");

const router = express.Router();
const feedController = require("../controller/feed");

router.get("/posts", feedController.getPosts);
router.post("/posts", feedController.postPost);
module.exports = router;
