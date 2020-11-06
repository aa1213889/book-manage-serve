const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'WOSHIzhu8484',
  database: 'jz_test'
})

connection.connect(() => {
  console.log('mysql链接好了')
})

module.exports = connection
