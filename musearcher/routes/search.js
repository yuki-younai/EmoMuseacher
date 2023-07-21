var express = require("express");
var router = express.Router();
const { Collection } = require("mongoose");
var mugu_search = require("./search/migu_search");
var kuwo_search = require("./search/kuwo_search");
var kugou_search = require("./search/kugou_search");
var qq_search = require("./search/qq_search");
var search = require("./search/search_all");
var memcache = require("memory-cache");

var song;

let cache = (req, res, next) => {
  //memory-cache中间件
  let searchMusic = req.body.searchMusic;
  let searchData_cache = memcache.get(searchMusic);
  if (searchData_cache) {
    console.log("search: searchMusic:" + searchMusic + " is in cache");
    res.json(searchData_cache);
    return;
  } else {
    //复制一个 json函数一个用来取值一个用来返回值
    //重写JSON方法，在路由函数调用JSON方法时获取到需要缓存的数据,然后通过复制的jsonResponse进行返回
    res.jsonResponse = res.json;
    res.json = (value) => {
      res.jsonResponse(value);
      memcache.put(searchMusic, value, 100 * 1000); //设置100秒缓存
      console.log(
        "search: put searchMusic:" + searchMusic + " to memory cache"
      );
    };
    next();
  }
};

/* GET search page. */
router.get("/", function (req, res, next) {
  res.render("search"); //用某对象的某个变量值一同来渲染一个特定的模板，然后将结果作为响应发送。
});

router.post("/", cache, function (req, res, next) {
  let searchMusic = req.body.searchMusic;
  console.log(searchMusic);
  search(searchMusic).then((reqsong) => {
    song = reqsong;
    console.log(song);
    res.json(song); //服务器返回song数据
  });
});

module.exports = router;
