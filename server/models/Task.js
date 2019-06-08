const mongoose = require('mongoose');
const Schema =  mongoose.Schema

const TaskSchema = new Schema({
    task_name: {
        type: String
    }
})

module.exports = User = mongoose.model('task', TaskSchema)