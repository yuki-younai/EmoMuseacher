const axios = require("axios");
var express = require('express');

const song = require("./song");
const interface = require("../../setting");
async function searchmusic(searchContent) { //设为async函数，因为有axios存在等待行为。

    var searchSrc = interface.kugouSearch + searchContent + "&limit=100"; //输入搜索地址

    var songList = [];
    var searchSrcs2 = []; //歌曲rid搜索列表
    var songs = [];

    await axios({ //await等待行为结束才会进行下一步
        method: 'get',
        url: searchSrc,
        responseType: 'json'
    }).then( (response) => {   //response:搜索结果对象
        // console.log(response.data.data.list);

        for(var songid of response.data.data.lists) { //页面信息在response.data中
            let searchSrc2 = interface.kugouRid + "aid=" + songid.AlbumID + "&hash=" + songid.HQFileHash;
            searchSrcs2.push(searchSrc2);
            // console.log(searchSrc2)
            let newsong = new song();
            newsong.name = songid.SongName;
            newsong.artist = songid.SingerName;
            // console.log(newsong);
            songs.push(newsong);
        }
        
    }).catch( (error) => {
        console.log(error);
    });

    
    //第二部同样await
    await axios.all(searchSrcs2.map( (searchSrc2) =>  // axios.all同时执行所有的rid查询请求,并行操作
        axios.get(searchSrc2))
    ).then( (resArr) => {//所有的查询请求执行完后进入then, resArr为所有请求结果的数组
        for(let i in resArr) {
            songs[i].url = resArr[i].data.data.play_url;
            songs[i].pic = resArr[i].data.data.img;
            songs[i].lyric =  resArr[i].data.data.lyrics;
            songs[i].songTimeMinutes = null;
        }
    }).catch((error) => {
        console.log(error);
    });
    

    //console.log(songs);
    return songs;
}
module.exports = searchmusic;