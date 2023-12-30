const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema({
    username: {type: String, unique: true, required: true, min:4},
    password: {type: String, required: true, min: 6}
});

const UserModel = model('User', userSchema);

module.exports = UserModel;