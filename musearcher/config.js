module.exports = {
  // port: 3000, // express 服务启动端口
  /* 数据库相关配置 */
  db: {
    host: "localhost", // 主机名
    port: 3306, // MySQL 默认端口为 3306
    user: "root", // 使用 root 用户登入 MySQL
    password: "321321", // MySQL 密码
    database: "musearch", // 使用数据库
    connectionLimit: 60,
  },

  dbConn: function (sql, sqlObj, callBack) {
    //数据池相关操作
    let pool = mysql.createPool(this.config);
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
