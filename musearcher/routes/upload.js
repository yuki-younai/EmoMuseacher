var express = require("express");
const { Collection } = require("mongoose");
var router = express.Router();
var fs = require("fs");
var multer = require("multer");
var multiparty = require("multiparty");
let setting = require("../setting");
let url = require("url");
var memcache = require("memory-cache");
var searchUtil = require("search-util");
const Fuse = require("fuse.js"); //模糊搜索库
const NodeID3 = require("node-id3"); //mp3文件解析库
// const FileType = require("file-type");
// import { fileTypeFromFile } from "file-type";

const database = require("../db");

// fuse模糊搜索选项
const options = {
  includeScore: true,
  keys: ["name"],
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("upload");
});

//上传文件路由
router.post("/", function (req, res, next) {
  // console.log(req.files);  // 上传的文件信息
  // console.log(req);

  let form = new multiparty.Form();
  form.parse(req, (err, fields, file) => {
    console.log("file:", file);
    if (JSON.stringify(file) === "{}" || file === undefined) {
      //判断文件是否存在
      console.log("file not exist");
      return;
    }
    let fileName = file.avatar[0].originalFilename; //文件名
    let sql0 = "select name from uploadmusic";
    database.query(sql0, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let flag = false; // 文件是否存在
        for (let obj of data) {
          if (obj.name === fileName) flag = true;
        }
        if (flag === true) {
          console.log();
          response = {
            message: "已经有相同名称的文件",
            filename: fileName,
          };
          res.end(JSON.stringify(response));
        } else {
          var des_file = setting.uploadMusicDir + fileName; //文件名
          console.log(des_file);
          fs.readFile(file.avatar[0].path, function (err, data) {
            // 异步读取文件内容
            fs.writeFile(des_file, data, function (err) {
              // des_file是文件名，data，文件数据，异步写入到文件
              if (err) {
                console.log(err);
              } else {
                let sql = "INSERT INTO uploadmusic SET name=?,userid=?";
                let sqlArr = [fileName, file.id];
                database.query(sql, sqlArr, (err, data) => {
                  if (err) {
                    console.log("error in upload database:", err);
                    return;
                  }
                });
                // 文件上传成功，respones给客户端
                response = {
                  message: "File uploaded successfully",
                  filename: fileName,
                };
              }
              console.log(response);
              res.end(JSON.stringify(response));
            });
          });
        }
      }
    });
  });
});

let cache = (req, res, next) => {
  console.log("in get upload music list cache");
  //memory-cache中间件
  let uploadMusicList_cache = memcache.get("uploadMusicList");
  if (uploadMusicList_cache) {
    res.json(uploadMusicList_cache);
    return;
  } else {
    res.jsonResponse = res.json;
    res.json = (value) => {
      res.jsonResponse(value);
      memcache.put("uploadMusicList", value, 10 * 1000); //设置100秒缓存
      console.log("uploadMusicList: upload music list to memory cache");
    };
    next();
  }
};

// 获取上传音乐列表
router.get("/getlist", cache, function (req, res, next) {
  let sql = "select * from uploadmusic";
  database.query(sql, (err, data) => {
    if (err) {
      console.log("upload/getlist: 获取uploadMusicList失败");
      return;
    } else {
      res.json(data);
    }
  });
});

let cacheGetMusic = (req, res, next) => {
  let reqUrl = req.url;
  let urlObj = url.parse(reqUrl, true);
  let urlQuerySong = urlObj.query.song;

  let Data_cache = memcache.get(urlQuerySong);
  console.log("in cacheGetMusic");
  if (Data_cache) {
    console.log("Music ", urlQuerySong, " is in cache");
    res.json(Data_cache);
    return;
  } else {
    //复制一个 json函数一个用来取值一个用来返回值
    //重写JSON方法，在路由函数调用JSON方法时获取到需要缓存的数据,然后通过复制的jsonResponse进行返回
    res.jsonResponse = res.json;
    res.json = (value) => {
      res.jsonResponse(value);
      memcache.put(urlQuerySong, value, 10000 * 1000); //设置100秒缓存
      console.log(
        "getUploadMusic: put song:" + urlQuerySong + " to memory cache"
      );
    };
    next();
  }
};

//获取创建歌曲url，歌曲播放地址接口：/upload/getUploadMusic?song=
router.get("/getUploadMusic", (req, res, next) => {
  //   let musicName = req.body.musicName;
  let reqUrl = req.url;
  let urlObj = url.parse(reqUrl, true);
  let urlQuery = urlObj.query;
  console.log(urlQuery.song);

  let musicFile = setting.uploadMusicDir + urlQuery.song;
  let readerStream = fs.createReadStream(musicFile, {
    autoClose: true,
  });
  readerStream.on("error", (err) => {
    console.log("getUploadMusic error:", err);
  });

  res.writeHead(200, {
    "Content-Type": "audio/mp3", //设置content-Type
  });

  readerStream.pipe(res); //使用管道传输
  readerStream.on("end", function () {
    res.end();
  });
});

router.get("/getImg", (req, res, next) => {
  let reqUrl = req.url;
  let urlObj = url.parse(reqUrl, true);
  let urlQuery = urlObj.query;
  let musicFile = setting.uploadMusicDir + urlQuery.song;
  NodeID3.read(musicFile, function (err, tags) {
    if (err) {
      console.log("error in upload getImg", err);
      return;
    }
    // console.log(tags);
    if (tags.image) {
      res.writeHead(200, {
        "Content-Type": tags.image.mime, //设置content-Type
      });
      res.end(tags.image.imageBuffer);
      // readerStream.pipe(res); //使用管道传输
    }
  });
});

//搜索上传音乐路由
router.post("/search", (req, res, next) => {
  let searchMus = req.body.search;
  console.log("search ", searchMus, " in upload Music");
  let sql = "select name from uploadmusic";
  database.query(sql, (err, data) => {
    if (err) {
      console.log("error in upload/search:", err);
    } else {
      const fuse = new Fuse(data, options);
      const searchRes = fuse.search(searchMus);
      res.json(searchRes);
    }
  });
});

module.exports = router;
