var express = require('express');
const { Collection } = require('mongoose');
var router = express.Router();
var rankinglist = require('./rankinglist/rankinglist');

router.get('/1', function(req, res, next) { //热门榜  
    res.render('rankinglist', {
        num: "1"
    })  
})

router.post('/1', function(req, res, next) { //热门榜  
    rankinglist("26").then( (data) => {
        res.json(data);
    })
})

router.get('/2', function(req, res, next) {   
    res.render('rankinglist', {
        num: 2
    })
})

router.post('/2', function(req, res, next) { //中文榜
    // res.render('rankinglist')
    rankinglist("5").then( (data) => {
        res.json(data);
    })
})

router.get('/3', function(req, res, next) {   
    res.render('rankinglist', {
        num: 3
    })
})
router.post('/3', function(req, res, next) { //欧美榜
    rankinglist("3").then( (data) => {
        res.json(data);
    })
})

router.get('/4', function(req, res, next) {   
    res.render('rankinglist', {
        num: 4
    })
})
router.post('/4', function(req, res, next) { //日语榜
    rankinglist("17").then( (data) => {
        res.json(data);
    })
})



module.exports = router;

