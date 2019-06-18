const Tasks = require('../../models/Task') 

module.exports.getAllTasks = async (req, h) => {
  try {
    // let tasks = await module.exports.getAll();
    let tasks = await Tasks.getTasks();
    return h.response(tasks).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
};

module.exports.getAll = ()=> {
  return Tasks.getTasks();
}

module.exports.getTaskID = async (req, h) => {
  try {
    let taskID = req.params.id;
    // let tasks = await module.exports.getTaskID(taskID);
    let tasks = await Tasks.getTaskID(taskID);
    return h.response(tasks).code(200);
  } catch (error) {
    return h.response(error.stack).code(500);
  }
};

module.exports.getTaskID = async (taskID)=> {
  return await Tasks.getTaskID(taskID);
}

module.exports.createTask = async (req, h) => {
  try {
    let taskData = req.payload.task_name
    // let tasks = await module.exports.createTask(taskData);
    let tasks = await Tasks.createTask(taskData);
    return h.response(tasks).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
};

module.exports.createTask = async (taskData) => {
  return await Tasks.createTask(taskData);
}

module.exports.updateTask = async (req, h) => {
  try {
    let taskID = req.params.id;
    let taskName = req.payload.task_name;
    let tasks = await Tasks.updateTask(taskID, taskName);
    return h.response(tasks).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
};

module.exports.updateTask = async (taskID, taskName) => {
  return await Tasks.updateTask(taskID, taskName);
}

module.exports.deleteTask = async (req, h) => {
  try {
    let taskID = req.params.id;
    // let tasks = await module.exports.deleteTask(taskID);
    let tasks = await Tasks.deleteTask(taskID);
    return h.response(tasks).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
};

module.exports.deleteTask = async (taskID) => {
  return await Tasks.deleteTask(taskID);
}