const express = require('express')
const router = express.Router()
const user = require('../../src/user')

router.post('/register', (req, res) => {
  user.creatUser(req.body, (data) => {
    res.json({ status: 200, message: 'ok', playload: data })
  }, (error) => {
    res.json({ status: 500, message: error })
  })
})

router.post('/login', (req, res) => {
  user.loginUser(req.body, (data) => {
    res.json({ status: 200, message: 'ok', playload: data })
  }, (error) => {
    res.json({ status: 500, message: error })
  })
})

router.post('/usersInfo', (req, res) => {
  user.usersInfo(req.body, (data) => {
    res.json({ status: 200, message: 'ok', playload: data })
  }, (error) => {
    res.json({ status: 500, message: error })
  })
})



module.exports = router