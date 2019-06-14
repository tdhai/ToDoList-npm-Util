const mongoose = require('mongoose');
const Schema =  mongoose.Schema

const ToDoSchema = new Schema({
    name: {
        type: String
    }
})

module.exports = User = mongoose.model('ToDo', ToDoSchema)