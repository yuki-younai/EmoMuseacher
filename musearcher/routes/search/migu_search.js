// 咪咕搜索接口


const axios = require("axios");
var express = require('express');

const song = require("./song");
const interface = require("../../setting");

async function searchmusic(searchContent) { //设为async函数，因为有axios存在等待行为。

    var searchSrc = interface.miguSearch + searchContent  + "&limit=100"; //输入搜索地址

    var songList = [];
    var searchSrcs2 = []; //歌曲rid搜索列表
    var songs = [];

    await axios({ //await等待行为结束才会进行下一步
        method: 'get',
        url: searchSrc,
        responseType: 'json'
    }).then( (response) => {   //response:搜索结果对象
        // console.log(response.data.data.list);

        for(var songid of response.data.musics) { //页面信息在response.data中
            let newsong = new song();
            newsong.name = songid.songName;
            newsong.pic = songid.cover;
            newsong.artist = songid.singerName;
            newsong.url = songid.mp3;
            newsong.songTimeMinutes = null;

            songs.push(newsong);
        }
        
    }).catch( (error) => {
        console.log(error);
    });

    //console.log(songs);
    return songs;
}

module.exports = searchmusic;