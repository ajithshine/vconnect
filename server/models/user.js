const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        gender: { type: String, required: true },
        date: { type: Date, required: true },
        token: { type: String },
        profilePicture: {
            type: String,
            default: "Not Uploaded"
        },
        followers: {
            type: Array,
            default: []
        },
        following: {
            type: Array,
            default: []
        },
        description:{
            type:String,
            default:"My New Profile"
        }
    },
    { collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model