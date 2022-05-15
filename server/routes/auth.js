require("dotenv").config();
const router = require("express").Router();
const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { route } = require("./users");




router.post("/register", async (req, res) => {
    try {
        // Get user input
        const { username, email, password, gender, date } = req.body;

        // Validate user input
        if (!(email && password && username && gender && date)) {
            res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User with this email already exist. Please Login");
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(409).send("This username is taken. Please change Username");
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await new User({
            email: req.body.email,
            username: req.body.username,
            password: encryptedPassword,
            gender: req.body.gender,
            date: req.body.date,
        })

        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // save user token
        user.token = token;

        //save user
        await user.save()
        // return new user
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
});


// Login
router.post("/login", async (req, res) => {
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  });


module.exports = router;