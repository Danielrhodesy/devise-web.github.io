const connection = require('./connection')
const { generateHash } = require('../auth/hash')

function createUser({ username, password }, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({ username, hash }))
}

function getUser(id, db = connection) {
  return db('users').where('id', id).first()
}

function getUserByUsername(username, db = connection) {
  return db('users').where('username', username).first()
}

module.exports = {
  createUser,
  getUser,
  getUserByUsername
}