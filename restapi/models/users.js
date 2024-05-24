const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    dob: {
        type: Date
    },
});

module.exports = mongoose.model('User',userSchema)