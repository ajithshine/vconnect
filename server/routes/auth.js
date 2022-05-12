const router = require("express").Router();
const User = require('../models/user');
const bcrypt = require("bcrypt");
const { route } = require("./users");


//Register
router.post("/register", async (req, res) => {
    try {
        // Generate password hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);

        // Create new user
        const user = await new User({
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
            gender: req.body.gender,
            date: req.body.date,
        })

        // Save user and return response
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Duplicate email or username' })
    }
})


// Login
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(404).json("user not found");

  
      const validPassword = await bcrypt.compareSync(req.body.password, user.password)
      !validPassword && res.status(500).json("wrong password")
  
      res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
  });


module.exports = router;