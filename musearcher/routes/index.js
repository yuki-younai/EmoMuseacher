var express = require('express');
const { Collection } = require('mongoose');
var router = express.Router();
var searchmusic = require('./search/search_all');
var rankinglist = require('./rankinglist/rankinglist');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' }); //用某对象的某个变量值一同来渲染一个特定的模板，然后将结果作为响应发送。
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  
});

// router.post('/', function(req, res, next) {
//   // searchmusic("hanser").then( song => { //使用async的返回值的方法
//   //     console.log(song);
//   //     res.render('index', song); //用某对象的某个变量值一同来渲染一个特定的模板，然后将结果作为响应发送。
//   // });

//   let searchMusic = req.body.searchMusic;
//   searchmusic(searchMusic).then( reqsong => {
//     let song = reqsong;
//     res.json(song); //服务器返回song数据
//   })
// })

router.post('/', function(req, res, next) {
  rankinglist().then((reqrankinglist) => {
    res.json(reqrankinglist);
  })
  
})



module.exports = router;

