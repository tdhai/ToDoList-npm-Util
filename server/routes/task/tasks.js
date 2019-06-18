'use strict'

const mongoose = require('mongoose')
const Task = require('../../models/Task')
const controller = require('../../controllers/task/task_controller')


exports.plugin={
  register: (server, option) =>{
    server.route({
      method: 'GET',
      path: '/tasks',
      handler: controller.getAllTasks
    }),
    

    server.route({
      method: 'GET',
      path: '/task/{id}',
      handler: controller.getTaskID
    })

    server.route({
      method: 'POST',
      path: '/task',
      handler: controller.createTask
    })

    server.route({
      method: 'PUT',
      path: '/task/{id}',
      handler: controller.updateTask
    })

    server.route({
      method: 'DELETE',
      path: '/task/{id}',
      handler: controller.deleteTask
    })
  },
  name: 'tasks'
}

