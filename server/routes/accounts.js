'use strict'
const mongoose = require('mongoose')
const Account = require('../models/Account')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

var privateKey = "abccd";

const Authentication = (req, h) => {
  var token = req.headers['authorization'];
  return jwt.verify(token, privateKey, function (err, decoded) {
    if (err) {
      return { err };
    }
    let loginName = decoded.data;
    return Account.findOne({
      loginName: loginName
    }).then(LogedIn => {
      return Account.find((err, res) => {
        if (err) {
          return err;
        }
        return h.continue;
      })
    }).catch(err => { return { err } })
  });
  

}

//mocha, jest
exports.plugin = {
  register: (server, option) => {

    server.route({
      method: 'GET',
      path: '/accounts',
      config: {
        pre: [{ method: Authentication }],
        handler: (req, h) => {
      
          return Account.find((err, res) => {
            if (err) {
              return err;
            }
            return res;
          })
          // return jwt.verify(token,privateKey, function(err, decoded) {
          //   if (err) {
          //     return {err}; 
          //   }
          //   let loginName = decoded.data;
          //   return Account.findOne({
          //     loginName: loginName
          //   }).then(LogedIn =>{
          //     return Account.find((err, res) => {
          //       if (err) {
          //         return err;
          //       }
          //       return res;
          //     })
          //   }).catch(err=>{return {err}})
          // });
        }
      },

    }),

      server.route({
        method: 'POST',
        path: '/account',
        handler: (req, h) => {
          var register = new Account();
          register.loginName = req.payload.loginName

          const saltRounds = 10;
          return bcrypt.genSalt(saltRounds)
            .then(salt => {
              return bcrypt.hash(req.payload.password, salt)
                .then(passwordHashed => {
                  register.password = passwordHashed;
                  console.log(register);
                  return register.save();
                })
            })

          // return register.save().then((err, res) =>{
          //   if(err){
          //     return err;
          //   }
          //   return res;
          // })
        }
      })

    server.route({
      method: 'POST',
      path: '/login',
      handler: (req, h) => {
        var loginName = req.payload.loginName;
        var password = req.payload.password;
        return Account.findOne({
          "loginName": loginName
        }).then(userFound => {
          var passwordFound = userFound.password;
          return bcrypt.compare(password, passwordFound).then(success => {
            var token = jwt.sign({
              data: loginName
            }, privateKey, { expiresIn: '1h' });
            return { token: token };
          })
        })
      }
    })

  },
  name: 'accounts'
}

