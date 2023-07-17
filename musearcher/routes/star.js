var express = require("express");
const { Collection } = require("mongoose");
var router = express.Router();
var rankinglist = require("./rankinglist/rankinglist");
var fs = require("fs");
var exec = require("child_process").exec;
var memcache = require("memory-cache");

const database = require("../db");
const { data } = require("jquery");
var search = require("./rankinglist/search");

// router.get('/', function(req, res, next) {

// })

router.post("/starset/", function (req, res, next) {
  let id = req.body.id;
  let sql0 = "select * from star where id=? and song=? and artist=?";
  let sqlArr0 = [id, req.body.song, req.body.artist];
  database.query(sql0, sqlArr0, (err, data) => {
    if (err) {
      console.log("star/starget: error in database:", err);
      return;
    }
    if (data.length >= 1) {
      console.log("starset: 已经收藏过了");
      res.send({
        msg: "已经收藏过了",
      });
      return;
    } else {
      let sql =
        "INSERT INTO star SET id=?,song=?,artist=?,platform=?,songid=?,img=?";
      let sqlArr = [
        id,
        req.body.song,
        req.body.artist,
        req.body.platform,
        req.body.songid,
        req.body.img,
      ];
      database.query(sql, sqlArr, (err, data) => {
        if (err) {
          console.log("star/starget: error in database:", err);
          return;
        }
        res.send({
          msg: "收藏成功",
        });
        // res.json(data)
      });
    }
  });
});

router.post("/starget/", function (req, res, next) {
  let id = req.body.id;
  let sql = "select * from star where id=?";
  let sqlArr = [id];
  database.query(sql, sqlArr, (err, data) => {
    if (err) {
      console.log("star/starget: error in database:", err);
      return;
    }
    res.json(data);
  });
});

module.exports = router;
