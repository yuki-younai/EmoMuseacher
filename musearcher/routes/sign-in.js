var express = require("express");
var router = express.Router();

const database = require("../db");

router.get("/", (req, res, next) => {
  res.render("sign-in");
});

router.post("/", (req, res, next) => {
  console.log("服务端", req.body);
  // const {name,pwd} = req.body;

  const name = req.body.name;
  const pwd = req.body.pwd;
  const type = req.body.type; // login or register

  if (type == "login") {
    console.log("now login");
    let sql = "select * from user where username=? and password=?";
    let sqlObj = [name, pwd];
    let callBack = function (err, data) {
      //数据库的回调函数

      // console.log(data);
      // console.log(data[0].id);
      // console.log("data:", data.length);
      if (err) {
        console.log("失败");
        return;
      }
      if (data.length != 1) {
        console.log("密码或用户名出错");
        res.send({
          msg: "用户名或密码出错",
          code: 400,
        });
        return;
      }

      res.send({
        id: data[0].id,
        msg: "成功登录",
        code: 200,
      });
    };
    database.query(sql, sqlObj, callBack);
  } else if (type == "register") {
    console.log("now register");
    let sql = "select * from user where username=?";
    let sqlArr = [name];
    if (name.length > 20) {
      res.send({
        msg: "用户名过长",
      });
      return;
    }
    if (pwd.length > 20) {
      res.send({
        msg: "密码过长",
      });
      return;
    }
    let callBack = (err, data1) => {
      console.log(data1);
      if (err) {
        console.log("err");
        console.log(err);
        return;
      }
      console.log("wishing数据", data1);
      if (data1.length >= 1) {
        //测试查找的数据的长度，如果大于0就代表数据库中存在这个用户
        console.log("用户存在");
        res.send({
          // 内容响应给客户端
          code: 400,
          msg: "该用户已存在",
          affectedRows: data1.affectedRows,
        });
        return;
      } else {
        console.log("new user!");
        let sql = "INSERT INTO user SET id=?,username=?,password=?"; //insert into 表名
        var Rand = Math.random();
        var id = Math.round(Rand * 100000000);
        console.log(id);
        let sqlArr = [id, name, pwd];
        let callBack = (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          res.send({
            id: id,
            code: 200,
            msg: "注册成功",
            affectedRows: data.affectedRows,
          });
          // console.log(data)
          return;
        };
        database.query(sql, sqlArr, callBack); //数据库插入操作
      }
    };
    database.query(sql, sqlArr, callBack); //数据库查询操作，查询结束后在callback中进行插入操作。
  }
});

module.exports = router;
