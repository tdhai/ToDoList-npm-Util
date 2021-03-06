'use strict'

const Hapi = require('@hapi/hapi')
const mongoose = require('mongoose')

const server = new Hapi.Server({
  host: 'localhost',
  port: 5000,
  routes: {
    cors: true
  }
})

server.app.db = mongoose.connect(
  'mongodb://localhost/to-do-list',
  { useNewUrlParser: true }
)

const init = async () => {
  await server
    .register([
      {plugin :require('./routes/todo/todo')},
      {plugin: require('./routes/task/tasks')},
      {plugin: require('./routes/account/accounts')}
    ] ,
      {
        routes: {
          prefix: '/api'
        }
      }
    )
    .catch(err => {
      console.log(err);
    })
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
  // console.log("started");
}

init();