//const mongoose = require('mongoose');

import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    description: {
        type: 'string',
        require: true,
    },
    completed: {
        type: 'boolean',
        default: false,
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;