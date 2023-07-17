var express = require('express');
var router = express.Router();

const database = require('../db');

router.get('/', (req, res, next) => {
    res.render('login');
});

router.post("/", (req, res, next) => {
    console.log("服务端",req.body);
    // const {name,pwd} = req.body;

    const name = req.body.name;
    const pwd = req.body.pwd;

    let sql = "select * from user where nickname=? and password=?";
    console.log("sql",sql);

    let sqlObj = [name, pwd];
    console.log("sqlObj", sqlObj);

    let callBack = function(err, data) {

        console.log(data);
        // console.log("data:", data.length);
        if(err){
            console.log("失败")
            return;
        }
        if(data.length != 1) {
            console.log("密码或用户名出错")
            res.send({
                msg:"用户名或密码出错",
                code:400
            })
            return;
        }
       
        res.send({
            msg:"成功登录",
            code:200
        })
    }
    database.query(sql, sqlObj, callBack);
});

module.exports = router;