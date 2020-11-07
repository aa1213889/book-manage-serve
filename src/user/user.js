const db = require('../database/mongoose')
const tool = require('../tool/index')
const md5 = require('md5-node')
/**
 * 用户集合
 */
const userSchema = new db.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String, unique: true },
  gender: { type: Number, default: 2 },
  email: { type: String, required: true, unique: true },
  headIcon: String,
  level: { type: Number, default: 99 },
  phoneNum: String
})

const User = db.model('User', userSchema)

//注册
const creatUser = (data, success, error) => {
  const [_name, _password, _email] = [data.name, data.password, data.email]
  new User({
    name: _name,
    password: md5(_password),
    email: _email,
    id: tool.uuid()
  }).save(err => {
    if (err) return error(err)
    success('保存成功')
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


module.exports.creatUser = creatUser
module.exports.loginUser = loginUser