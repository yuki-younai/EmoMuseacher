var express = require('express');
var router = express.Router();
const { Collection } = require('mongoose');
// var mugu_search = require('./search/migu_search')
// var kuwo_search = require('./search/kuwo_search')
// var kugou_search = require('./search/kugou_search')
// var qq_search = require('./search/qq_search')
var search = require("./rankinglist/search")

var song;

// 此路由仅限于在

router.post('/', function(req, res, next) {
    let searchMusic = req.body.searchMusic;
    console.log("searchMusic", searchMusic);
    search(searchMusic).then( reqsong => {
        song = reqsong;
        // console.log(song);
        res.json(song); //服务器返回song数据
    })
});

module.exports = router;