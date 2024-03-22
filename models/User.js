const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    id: {
        type: int
    },
    name:{
        type: String,
        required: true
    },
    gmail:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('users', UserSchema);