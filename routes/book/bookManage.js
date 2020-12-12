const express = require('express') //1.引入express
const router = express.Router() //2.创建路由容器
const book = require('../../src/book')

router.post('/info', (req, res) => {
  book.creatUser(req.body, (data) => {
    res.json({ status: 200, message: 'ok', playload: data })
  }, (error) => {
    res.json({ status: 500, message: error })
  })
})

router.post('/addBook', (req, res) => {
  book.addBook(req.body, (data) => {
    res.json({ status: 200, message: 'ok', playload: data })
  }, (error) => {
    res.json({ status: 500, message: '添加失败，请检查信息完整性' })
  })
})

router.post('/query', (req, res) => {
  book.queryBook(req.body, (data) => {
    res.json({ status: 200, message: 'ok', playload: data })
  }, (error) => {
    res.json({ status: 500, message: error })
  })
})

module.exports = router 