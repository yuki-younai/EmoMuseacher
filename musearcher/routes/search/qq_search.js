const axios = require("axios");
var express = require('express');

const song = require("./song");
const interface = require("../../setting");
const e = require("express");

async function searchmusic(searchContent) { //设为async函数，因为有axios存在等待行为。

    var searchSrc = interface.qqSearch + searchContent + "&limit=5"; //输入搜索地址
    var songList = [];
    var searchSrcs2 = []; //歌曲rid搜索列表
    let searchSrcs3 = []; //歌词搜索列表
    var songs = [];

    await axios({ //await等待行为结束才会进行下一步
        method: 'get',
        url: searchSrc,
        responseType: 'json'
    }).then( (response) => {   //response:搜索结果对象
        // console.log(response.data.data.list);

        for(var songid of response.data.req.data.body.song.list) { //页面信息在response.data中
            let searchSrc2 = interface.qqRid + songid.mid // url搜索地址
            let searchSrc3 = interface.qqLyric + songid.mid // 歌词搜索请求
            searchSrcs2.push(searchSrc2)
            searchSrcs3.push(searchSrc3)
            // console.log(searchSrc2)
            let newsong = new song()
            newsong.name = songid.name
            newsong.pic = interface.qqImage + songid.album.mid + ".jpg";
            newsong.artists = [];
            if(songid.grp.length != 0) {
                for(let singer of songid.grp[0].singer) {
                    newsong.artists.push(singer.name);
                }
            } else {
                for(let singer of songid.singer) {
                    newsong.artists.push(singer.name);
                }
            }
            newsong.artist = newsong.artists.reduce( (pre, cur) => {
                return pre + "&" + cur;
            });
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
        // console.log(resArr[4].data);
        for(let i in resArr) {
            // console.log(resArr[i].data);
            if(resArr[i].data.code == "成功") { //成功获取url的歌曲有8调信息，其他的只有7条
                songs[i].url = resArr[i].data.data.url;
                //console.log(songs[i].url);
            }
        }
        //console.log(songs); //最终的结果songs列表
    }).catch((error) => {
        console.log(error);
    });

    await axios.all(searchSrcs3.map( (searchSrc3) =>  // axios.all同时执行所有的rid查询请求,并行操作
        axios.get(searchSrc3))
    ).then( (resArr) => {//所有的查询请求执行完后进入then, resArr为所有请求结果的数组
        // console.log(resArr[4].data);
        for(let i in resArr) {
            // console.log(resArr[i].data);
            if(resArr[i].data.code == 0) { //成功获得标志其他的只有7条
                songs[i].lyric = resArr[i].data.lyric;
                //console.log(songs[i].url);
            }
        }
        //console.log(songs); //最终的结果songs列表
    }).catch((error) => {
        console.log(error);
    });
    

    //console.log(songs);
    return songs;
}

module.exports = searchmusic;