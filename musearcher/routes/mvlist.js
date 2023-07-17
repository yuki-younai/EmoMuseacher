var express = require('express');
const { Collection } = require('mongoose');
var router = express.Router();
var searchmusic = require('./search/search_all');
var rankinglist = require('./rankinglist/rankinglist');
var mvsearch = require('./search/mv_search');
const search = require('./search/search_all');

router.get('/', function(req, res, next) {
    res.render('mvlist');
});

router.post('/', function(req, res, next) {

    let searchMv = req.body.searchMv
    console.log("searchMv", searchMv)
    mvsearch(searchMv).then(reqmv=>{
        res.json(reqmv);
    })
    // res.render('mvlist');
})

module.exports = router

