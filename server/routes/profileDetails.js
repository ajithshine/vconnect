const router = require("express").Router();
const authToken = require("../middleware/authToken");
const Post = require("../models/post");
const User = require("../models/user");

//get User details and post
router.get("/details",authToken,async (req, res) => {
    try {
        const currentUserDetails = await User.findById(req.body.userId);
        const { password, token, ...other } = currentUserDetails._doc;
        const currentUserPosts = await Post.find({ userId: currentUserDetails._id });
        res.status(200).json({
            "userDetails": other,
            "userPosts": currentUserPosts
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;