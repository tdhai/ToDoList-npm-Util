const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  task_name: {
    type: String
  }
})

const getTasks = (req, h) => {
  return Task.find((err, res) => {
    if (err) {
      return err;
    }
    return res;
  })
}

const getTaskID = (req, h) => {
  return Task.findOne({
    _id: mongoose.Types.ObjectId(req.params.id)
  },
    (err, doc) => {
      if (err) {
        return err, 'Internal MongoDB error';
      }
      if (!doc) {
        return 'Not Found '
      }
      return doc;
    })
}

const createTask = (req, h) => {
  var task = new Task();
  task.task_name = req.payload.task_name

  return task.save().then((err, res) => {
    if (err) {
      return err;
    }
    return res;
  })
}

const updateTask = async (req, h) => {
  return Task.findOneAndUpdate(
    // { _id: await req.params.id },
    {_id: await mongoose.Types.ObjectId(req.params.id)},
    { task_name: req.payload.task_name },
    (err, result) => {
      if (err) {
        return err, 'Initeral MongoDB error'
      }
      if (result.n === 0) {
        return 'Not found'
      }
      return 204
    }
  )
}

const deleteTask = async (req, h) => {
  return Task.deleteOne(
    // { _id: req.params.id },
    {_id: await mongoose.Types.ObjectId(req.params.id)},
    (err, result) => {
      if (err) {
        return err, 'Initeral MongoDB error'
      }
      if (result.n === 0) {
        return 'Not found'
      }
      return 204
    }
  )
}

const Task = mongoose.model('task', TaskSchema)

module.exports = {
  Task,
  getTasks,
  getTaskID,
  createTask,
  updateTask,
  deleteTask
}