'use strict'

const mongoose = require('mongoose')
const Task = require('../models/Task')

exports.plugin = {
    register: (server, option) => {

        
        server.route({
            method: 'GET',
            path: '/todo/{page}',
            handler: (req, h) => {
                let page = req.params.page;
                let limit = 50;
                let skip = (page - 1) * limit;

                // return Task.find().limit(limit).skip(skip,(err, res) => {
                //     if (err) {
                //         return err;
                //     }
                //     return res;
                // })

                return Task.aggregate([
                    { "$skip": skip},
                    { "$limit": limit },
                    { "$sort": {"task_name":1} },
                    { "$project": {"test":"$task_name"}},
                ]).exec()
                    .then(res => {
                        return res;
                    })
                    .catch(err => {
                        return err;
                    })

                // getFromDatabase()
                //     .then(rs => {
                //         getFromDatabase1()
                //             .then(rs1 => {
                //                 console.log(rs1)
                //             })

                //     })
                //     .catch(err => {

                //     })


                // let rs = await getFromDatabase();
                // let rs1 = await getFromDatabase1();



            }
        })
    },
    name: 'todo'
}

