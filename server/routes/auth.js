const express = require('express')
const router = express.Router()
const { createUser, getUser, getUserByUsername } = require('../db/users')
const verifyJwt = require('express-jwt')

const token = require('../auth/token')

//login login token.issue

router.post('/register', register, token.issue)

router.post('/login', login)

router.get(
  '/user',
  verifyJwt({ secret: process.env.JWT_SECRET }),
  user
)

function userError(err, req, res, next) {
  console.log(err);

  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ ok: false, message: 'Access denied.' })
  }
}

function user(req, res) {
  getUser(req.user.id)
    .then(({ username }) =>
      res.json({
        ok: true,
        username
      }))
    .catch(() =>
      res.status(500).json({
        ok: false,
        message: 'An error ocurred while retrieving your user profile.'
      }))
}

function register(req, res, next) {
  const { username, password } = req.body
  createUser({ username, password })
    .then(([id]) => {
      res.locals.userId = id
      next()
    })
    .catch(({ message }) => {
      console.log(message)
      if (message.includes('UNIQUE constraint failed: users.username')) {
        return res.status(400).json({
          ok: false,
          message: 'Username already exists'
        })
      } else {
        return res.status(500).json({
          ok: false,
          message: "JWT Auth Error - Username"
        })
      }
    })
}

function login(req, res, next) {
  const { username } = req.body
  getUserByUsername({ username })
    .then(user => console.log(user)
    )
  // get username and password
  // look up user by username
  // ** hash the password provided
  // ** compare the hash to the db password hash
  // issue a token
}

router.use(userError)

module.exports = router