const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');


const app = express();

dotenv.config();

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


//MongoDB Connection
mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connected to MongoDB');
})


app.listen(3001, () => {
  console.log(`Example app listening on port 3001`)
})