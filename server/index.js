const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');
const userRoute = require('./routes/users');

const app = express();

dotenv.config();

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use("/api/user", userRoute);


//MongoDB Connection
mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connected to MongoDB');
})


app.get('/', async (req, res) => {
  res.send("Hai Welcome")
})


// Sign Up
app.post('/api/register', async (req, res) => {
  console.log(req.body)
  try {
    await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      gender: req.body.gender,
      date: req.body.date,
    })
    res.json({ status: 'ok' })
  } catch (error) {
    res.json({ status: 'error', error: 'Duplicate email or username' })
  }
})

// Login 
app.post('/api/login', async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  })

  if (user) {
    return res.json({ status: 'ok', user: true , file : true })
  } else {
    return res.json({ status: 'error', user: false })
  }

})

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`)
})