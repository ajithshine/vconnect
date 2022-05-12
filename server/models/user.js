const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        gender: { type: String, required: true },
        date: { type: Date, required: true },
        profilePicture: {
            type: String,
            default: ""
        },
        followers: {
            type: Array,
            default: []
        },
        following: {
            type: Array,
            default: []
        }
    },
    { collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model