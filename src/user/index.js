const db = require('../database/mongoose')
const tool = require('../tool/index')
const md5 = require('md5-node')
const session = require('express-session')

/**
 * 用户集合
 */
const userSchema = new db.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String, required: true },
  gender: { type: Number, default: 2 },
  email: { type: String, required: true, unique: true },
  birthday: { type: Date, default: Date.now },
  headIcon: { type: String },
  level: { type: Number, default: 99 },
  phoneNum: { type: String }
})

const User = db.model('User', userSchema)

//注册
const creatUser = (data, success, error) => {
  const [_name, _password, _email] = [data.name, data.password, data.email]
  allUserInfo((res) => {
    const _id = `0000${res.length + 1}`
    console.log(_id)
    new User({
      name: _name,
      password: md5(_password),
      email: _email,
      id: _id
    }).save(err => {
      if (err) return error(err)
      success('保存成功')
    })
  })
}

//登录验证
const loginUser = (data, success, error) => {
  const [_password, _email] = [md5(data.password), data.email]
  User.findOne({ password: _password, email: _email }, (err, res) => {
    if (res === null) return error('邮箱或密码有误')
    success(res)
  })
}

//获取全部用户信息
function allUserInfo (callback) {
  User.find({}, (err, res) => {
    if (res === null) return
    callback(res)
  })
}

//获取用户信息
const usersInfo = (data, success, error) => {
  if (Object.keys(data).length === 0) {
    allUserInfo((res) => {
      success(res)
    })
  } else {
    const [_name, _phoneNum, _email] = [data.name, data.phoneNum, data.email]
    User.find({ password: _name, phoneNum: _phoneNum, email: _email }, (err, res) => {
      if (res === null) return error('条件有误')
      success(res)
    })
  }
}


module.exports.creatUser = creatUser
module.exports.loginUser = loginUser
module.exports.usersInfo = usersInfo