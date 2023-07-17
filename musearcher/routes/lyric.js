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
    res.render('lyric');
})

module.exports = router