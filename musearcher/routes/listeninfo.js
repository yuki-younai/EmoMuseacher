var express = require('express');
const { Collection } = require('mongoose');
var router = express.Router();
const database = require('../db');

// 础虚拟用户这列全部置5 真实用户也可以这样 或者不麻烦的话初始化为3 点击一次增加0.5 最高为6

//路由得到听歌数据
router.post('/', function(req, res, next) {

    //console.log("listeninfo",req.body);

    var songname = req.body.songname
    // console.log("listeninfo",songname);
    var songsrc = req.body.songsrc
    var singer = req.body.singer
    var id = Number(req.body.id) 
    var username = req.body.username
    var songPlatform = req.body.platform
    var songId = req.body.songId
    var albumId = req.body.albumId

    let sql = "select * from listeninfo where id=? and song_artist=?";
    let song_artistOri = songname + "_" + singer;
    let song_artist = song_artistOri.replace("/,/g", "&").replace("/，/g", "&").replace(",");
    let sqlObj = [id, song_artist];

    

    database.query(sql, sqlObj, (err, data) => {
        // console.log(data);

        if(err) {
            console.log(err);
            return;
        }
        if(data.length >= 1) { //id和song_artist对被找到
            let nowPresstimes = data[0].presstimes + 0.5;
            let sql2 = "update listeninfo set presstimes=?,albumid=? where id=? and song_artist=?";
            // let sql2 = "update listeninfo set presstimes=?, where id=? and song_artist=?";
            let sqlArr2 = [nowPresstimes, id, song_artist];
            database.query(sql2, sqlArr2, (err2, data2) => {
                if(err2) {
                    console.log(err);
                    return;
                }
                res.send({
                    msg: "listeninfo数据更新成功"
                })
            })
            
        } else { //id和song_artist对没有找到，需要添加

            let pressTimeList = [4.0, 4.3, 4.6, 5.0, 5.5, 6.0, 6.5, 7.0]
            let pressTime = pressTimeList[Math.floor(Math.random()*pressTimeList.length)]
            console.log("now insert");
            let sql3 = "insert into listeninfo set id=?,song_artist=?,presstimes=?,songUrl=?,platform=?,songid=?,albumid=?";
            let sqlArr3 = [id, song_artist, pressTime, songsrc, songPlatform, songId, albumId];
            console.log(sqlArr3)
            database.query(sql3, sqlArr3, (err3, data3) => {
                if(err3) {
                    console.log(err3);
                    return;
                }
                console.log("listeninfo数据更新成功", data3);
                res.send({
                    msg: "listeninfo数据更新成功"
                })
            })
        }
    })
});

module.exports = router;