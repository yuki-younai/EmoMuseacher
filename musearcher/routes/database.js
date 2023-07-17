var express = require('express');

const database = require('../db'); // 获取连接实例
// const { port } = require('../config'); // 获取启动参数

var router = express.Router();

router.get('/', (req, res, next) => {
  /* 使用 connection.query 来执行 sql 语句 */
  // 第一个参数为 sql 语句，可以透过 js 自由组合
  // 第二个参数为回调函数，err 表示查询异常、第二个参数则为查询结果（这里的查询结果为多个用户行）
  var  sql = 'SELECT * FROM websites'; //从websites表中读取数据
  database.query(sql, (err, users) => {
    if (err) {
      res.send('query error')
    } else {
      // 将 MySQL 查询结果作为路由返回值
      res.send(users)
    }
  })
});
/*
router.listen(port, () => {
  console.log(`express server listen at http://localhost:${port}`)
})*/

module.exports = router;