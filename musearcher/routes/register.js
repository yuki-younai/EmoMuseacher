var express = require('express');
var router = express.Router();

const database = require('../db'); // 获取连接实例

router.get('/', function(req, res, next) {
    res.render('register'); //用某对象的某个变量值一同来渲染一个特定的模板，然后将结果作为响应发送。
});

router.post("/", (req, res, next) => { //req:请求对象 res:响应对象

    // res.render('register'); 只能写在get中

    //客户端向服务器提交的表单数据在req.body中
    const name = req.body.name;  
    const pwd = req.body.pwd;

    console.log(name);
    console.log(pwd);
    console.log('--- read seccesfully ---')

    let sql="select * from user where nickname=?";
    let sqlArr=[name];

    let callBack = (err,data1) => {
        console.log(data1);
        if(err) {
            console.log('err')
            console.log(err)
            return;
        }
        console.log("wishing数据", data1)
        if (data1.length >= 1) {//测试查找的数据的长度，如果大于0就代表数据库中存在这个用户
            console.log('用户存在');
            res.send({ // 内容响应给客户端
                code: 400,
                msg: "该用户已存在",
                affectedRows: data1.affectedRows
            });
            return;
        }else{
            console.log('new user!')
            let sql = "INSERT INTO user SET nickname=?,password=?"; //insert into 表名
            let sqlArr = [name,pwd];
            let callBack = (err,data) => {
                if(err) {
                    console.log(err)
                    return;
                }
                res.send({
                    code: 200,
                    msg: "注册成功",
                    affectedRows: data.affectedRows
                });
                // console.log(data)
                return;
            }
            database.query(sql, sqlArr, callBack); //数据库插入操作
        }
    }
    database.query(sql, sqlArr, callBack); //数据库查询操作，查询结束后在callback中进行插入操作。
});

module.exports = router;