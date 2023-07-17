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

// 小心回调地狱！
// async function readoutfile()

async function searchall(recommendList) {
  let outsongs = [];
  for (let item of recommendList) {
    if (item == "") continue;
    await search(item).then((res) => {
      outsongs.push(res);
    });
  }
  // console.log(outsongs)
  return outsongs;
}

async function recommend(id) {
  // outsongs = []
  let command =
    "java -jar recommend/RecommendLearn.jar recommend/train.csv " +
    id +
    " 12 recommend/output/" +
    id;
  let outtxt = "recommend/output/" + id + ".txt";
  // let command = "java -jar recommend/RecommendLearn.jar recommend/train.csv 9125083 9125083";
  console.log(command);

  let runExec = async () => {
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error("error: " + error);
          return;
        }
        console.log("stdout: " + stdout);
        console.log("stderr: " + typeof stderr);
        resolve();
      });
    });
  };

  await runExec();

  // console.log("after exec")

  let recommendList;

  let readfile = async () => {
    return new Promise((resolve, reject) => {
      fs.readFile(outtxt, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          resolve([]);
        } else {
          recommendList = data.split(";");
          console.log(recommendList);
          searchall(recommendList).then((outsongs) => {
            // console.log(outsongs)
            resolve(outsongs);
          });
        }
      });
    });
  };

  let result = await readfile();
  // console.log(result)
  return result;
}

// 使用中间件根据id缓存推荐信息
let cache = (req, res, next) => {
  //memory-cache中间件
  let id = req.body.id;
  let recommendData_cache = memcache.get(id);
  if (recommendData_cache) {
    res.json(recommendData_cache);
    return;
  } else {
    //复制一个 json函数一个用来取值一个用来返回值
    //重写JSON方法，在路由函数调用JSON方法时获取到需要缓存的数据,然后通过复制的jsonResponse进行返回
    res.jsonResponse = res.json;
    res.json = (value) => {
      res.jsonResponse(value);
      memcache.put(id, value, 300 * 1000); //设置100秒缓存
      console.log("recommend: put id:" + id + " to memory cache");
    };
    next();
  }
};

router.post("/", cache, function (req, res, next) {
  let id = req.body.id;
  let sql = "select * from listeninfo";
  let listeninfo;

  database.query(sql, (err, data) => {
    if (err) {
      console.log("recommend: 获取 listeninfo 信息失败");
      return;
    }
    // console.log(data);
    listeninfo = data;

    // res.json({
    //     data: data,
    //     code: 200
    // })

    // let csvString = data.reduce( (pre, cur) => {
    //     let result = Object.values(cur).join(',') + '\n'
    //     return pre + result;
    // })

    let csvString;
    data.forEach((item, index) => {
      let c = Object.values(item).join(",") + "\n";
      csvString += c;
    });
    let csv = csvString.replace("undefined", ""); //处理头部的未知undefined

    // console.log(csv)
    fs.writeFile("./recommend/train.csv", csv, (err) => {
      if (err) {
        console.log(err, "---->csv<---");
      }
    });

    recommend(id).then((out) => {
      // console.log("out:", out);
      res.json(out);
    });
  });
});

module.exports = router;
