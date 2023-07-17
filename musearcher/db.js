const mysql = require("mysql");

const config = require("./config").db; // 获取数据库配置信息

const pool = mysql.createPool(config);

database = {
  query: function (sql, sqlObj, callBack) {
    //数据池相关操作
    pool.getConnection((err, conn) => {
      if (err) {
        console.log(err);
        return;
      }
      conn.query(sql, sqlObj, callBack);
      conn.release();
    });
  },
};

module.exports = database;

// mysql.createConnection(config) // mysql.createConnection 方法创建连接实例
