const db = require('../database/mongoose')
/**
 * 图书集合
 * name 书名
 * id 主键(同一种书的主键)
 * type 类型
 * author 作者
 * press 出版社
 * cover 封面
 * price 价格
 * count 数量
 */
const bookSchema = new db.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  type: { type: Number, required: true, default: 0 },
  author: { type: String, required: true },
  press: { type: Date, required: true },
  cover: { type: String },
  price: { type: Number, required: true },
  count: { type: Number, default: 0 }
})



const Book = db.model('Book', bookSchema)

//查询图书信息
const queryBook = (data, success, error) => {

}

//图书录入
const addBook = (data, success, error) => {
  new Book({
    ...data
  }).save(err => {
    if (err) return error(err)
    success('保存成功')
  })
}

module.exports.addBook = addBook
module.exports.queryBook = queryBook