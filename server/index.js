const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const profileRoute = require('./routes/profileDetails');



const app = express();

dotenv.config();

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/profile", profileRoute);


//MongoDB Connection
mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connected to MongoDB');
})


app.listen(3001, () => {
  console.log(`Example app listening on port 3001`)
})