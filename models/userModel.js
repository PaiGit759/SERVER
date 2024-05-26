//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    // foto: {
    //     type: String,
    //     default: null,
    // },
    // firstName: {
    //     type: String,
    //     require: true,
    // },
    // lastName: {
    //     type: String,
    //     require: true,
    // },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: 'user',
    },
});

// const imageuserSchema = new mongoose.Schema({
//     fullName: {
//         type: String,
//         require: [true, 'Full name is required'],
//     },
//     foto: {
//         type: String,
//         default: null,
//     },
// });


const User = mongoose.model('User', userSchema);

export default User;

// const ImageUser = mongoose.model('ImageUser', imageuserSchema);

// module.exports = ImageUser;