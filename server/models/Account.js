const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  loginName: {
    type: String, required: true
  },
  password:{
    type: String, required: true
  }
})

module.exports = User = mongoose.model('account', TaskSchema)