const router = require("express").Router();
const authToken = require("../middleware/authToken")
const User = require("../models/user")
const bcrypt = require("bcrypt");

// Update Password
router.put("/update-password/", authToken,async (req, res) => {
    const { oldPass, newPass ,userId} = req.body;
    const user = await User.findById(userId);
    const passwordChecking = await bcrypt.compare(oldPass, user.password)
    if(passwordChecking){
        const encryptedPassword = await bcrypt.hash(newPass, 10);
        await User.findByIdAndUpdate(userId,{password:encryptedPassword})
        res.status(200).json("Your Password is updated")
    }
    else{
        res.status(200).json("Youre Old Password is incorrect")
    }
})

//get a user details using id
router.get("/:id", authToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { email, password, token, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
});


//follow a user

router.put("/:id/follow", authToken, async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { following: req.params.id } });
                res.status(200).json("user has been followed");
            } else {
                res.status(403).json("you already follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant follow yourself");
    }
});

//unfollow a user

router.put("/:id/unfollow", authToken, async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { following: req.params.id } });
                res.status(200).json("user has been unfollowed");
            } else {
                res.status(403).json("you dont follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant unfollow yourself");
    }
});

//search user
router.post('/search-users',(req,res)=>{
    let userPattern = new RegExp("^"+req.body.query)
    User.find({email:{$regex:userPattern}})
    .select("_id email")
    .then(user=>{
        res.json({user})
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = router;