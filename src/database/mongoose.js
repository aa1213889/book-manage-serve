const mongoose = require('mongoose') //是node里的一个mongodb第三方库 简化了很多mongodb的操作

mongoose.connect('mongodb://localhost/jztest',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => { console.log('MongoDB连接成功') })

module.exports = mongoose

