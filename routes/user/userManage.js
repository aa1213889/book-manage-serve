const express = require('express')
const router = express.Router()
// const db = require('../../public/js/mysql')


// router.get('/query', (req, res, next) => {
//   db.query(`select *from sb`, (err, result) => {
//     if (err) return console.log('[SELECT ERROR]:', err.message)
//     res.json({ status: 200, data: result })
//   })
// })

// router.post('/delete', (req, res, next) => {
//   db.query(`select *from emp`, (err, result) => {
//     if (err) return console.log('[SELECT ERROR]:', err.message)
//     res.json({ status: 200, data: result })
//   })
// })

module.exports = router