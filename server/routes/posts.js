const router = require("express").Router();
const authToken = require("../middleware/authToken");
const Post = require("../models/post");
const User = require("../models/user");

//create a post
router.post("/", authToken, async (req, res) => {
    const newPost = new Post(req.body);
    try {
        // const savedPost = await newPost.save();
        var multer=require('multer')
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
            cb(null, '/Images')
            },
            filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
            }
        })
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});


//update a post
router.put("/:id", authToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated");
        } else {
            res.status(403).json("you can update only your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


//delete a post
router.delete("/:id", authToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("the post has been deleted");
        } else {
            res.status(403).json("you can delete only your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//like | dislike a post
router.put("/:id/like", authToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been disliked");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//get timeline posts
router.get("/timeline/all", authToken,async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
          res.json(userPosts.concat(...friendPosts))
    } catch (err) {
        res.status(500).json(err);
    }
});

//get Userdetails and post


module.exports = router;