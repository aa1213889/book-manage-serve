const express = require('express') //1.引入express
const router = express.Router() //2.创建路由容器
// const db = require('../../public/js/mysql')

// const table = 'emp'



// router.get('/query', (req, res, next) => { //3.查询api 
//   db.query(`select *from ${table}`, (err, result) => {
//     if (err) return console.log('[SELECT ERROR]:', err.message)
//     res.json({ status: 200, data: result })
//   })
// })

// //删除图书信息
// router.post('/delete', (req, res, next) => {
//   let _bookId = req.body.id
//   console.log(`id is ${_bookId}`)
//   db.query(`delete from ${table} where eno = ${_bookId}`, (err, result) => {
//     if (err) return console.log('[SELECT ERROR]:', err.message)
//     res.json({ status: 200, data: result })
//   })
// })

module.exports = router //4.导出路由