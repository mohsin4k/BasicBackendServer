const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Email: String, 
    Password: String
})

module.exports = mongoose.model('User', userSchema);