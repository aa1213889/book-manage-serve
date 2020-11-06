const express = require('express');
const router = express.Router();
const db = require('../src/database/mongoose')
const Schema = db.Schema

const catSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  hobby: String
})
const Cat = db.model('Cat', catSchema)
const kittyCat = new Cat({ name: '凯蒂', age: 20, hobby: '恰鱼' })
kittyCat.save((err) => {
  if (err) return console.log(err)
  console.log('保存成功1')
})


/*登录*/
router.get('/login', function (req, res, next) {
  res.send('respond with a resource')
})

/*注册*/
router.get('/register', function (req, res, next) {
  res.send('23333333333333')
})

/*登出*/
router.get('/logout', function (req, res, next) {
  res.send('respond with a resource')
})

/*查看个人信息*/
router.get('/info', function (req, res, next) {
  res.send('respond with a resource')
})

/*修改个人信息*/
router.get('/info/edit', function (req, res, next) {
  res.send('respond with a resource')
})

/*权限*/
router.get('/power', function (req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
