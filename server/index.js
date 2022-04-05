
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/user')

//middlewares
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/vconnect')


// Sign Up
app.post('/api/register', async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.create({
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
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  })

  if (user) {
    return res.json({ status: 'ok', user: true })
  } else {
    return res.json({ status: 'error', user: false })
  }

})

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`)
})