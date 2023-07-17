var express = require('express');
const { Collection } = require('mongoose');
var router = express.Router();
var rankinglist = require('./rankinglist/rankinglist');
var fs = require("fs");
var exec = require('child_process').exec
var memcache = require('memory-cache')

const database = require('../db');
const { data } = require('jquery');
var search = require('./rankinglist/search')

let cache = (req, res, next)=>{ //memory-cache中间件
    let recommendData_cache = memcache.get(comment);
    if(recommendData_cache) {
        res.json(recommendData_cache)
        return
    } else {
        //复制一个 json函数一个用来取值一个用来返回值
        //重写JSON方法，在路由函数调用JSON方法时获取到需要缓存的数据,然后通过复制的jsonResponse进行返回
        res.jsonResponse = res.json
        res.json = (value)=>{
            res.jsonResponse(value)
            memcache.put(id, value, 5 * 1000) //设置100秒缓存
            console.log("commend: put comments to memory cache")
        }
        next()
    }
}

router.get('/', function(req, res, next) {
    let sql = "select * from comments"
    database.query(sql, (err, data)=>{
        if(err) {
            console.log("comment: 从数据库获取评论失败");
        }
        res.json(data)
    })
})

router.post('/', function(req, res, next) {
    let sql = "INSERT INTO comments SET id=?,username=?,comment=?"
    let sqlArr = [req.body.id, req.body.username, req.body.comment]
    console.log(req.body)
    database.query(sql, sqlArr, (err, data)=>{
        if(err) {
            console.log('error in comment database:', err)
            return;
        }
    })
    let sql2 = "select * from comments"
    database.query(sql2, (err, data)=>{
        if(err) {
            console.log("comment: 从数据库获取评论失败");
        }
        res.json(data)
    })
})

module.exports = router;

