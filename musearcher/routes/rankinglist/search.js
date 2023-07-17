const axios = require("axios");
var express = require("express");

const song = require("../search/song");
const interface = require("../../setting");
const e = require("express");

async function searchmusic(searchContent) {
  //设为async函数，因为有axios存在等待行为。

    var searchSrc = interface.qqSearch + searchContent + "&limit=5"; //输入搜索地址
    var songList = [];
    var searchSrcs2 = []; //歌曲rid搜索列表
    let newsong = new song()
    let songid
    console.log(searchSrc)

    await axios({
        //await等待行为结束才会进行下一步
        method: "get",
        url: searchSrc,
        responseType: "json",
    }).then((response) => {
        //response:搜索结果对象
        // console.log(response.data.req.data.list);

        songid = response.data.req.data.body.song.list[0]; //页面信息在response.data中
        // let searchSrc2 = interface.qqRid + songid.mid;
        // searchSrcs2.push(searchSrc2);
        // // console.log(searchSrc2)
        // console.log(songid)
        
        newsong.name = songid.name;
        newsong.pic = interface.qqImage + songid.album.mid + ".jpg";
        newsong.artists = [];
        if (songid.grp.length != 0) {
            for (let singer of songid.grp[0].singer) {
            newsong.artists.push(singer.name);
            }
        } else {
            for (let singer of songid.singer) {
            newsong.artists.push(singer.name);
            }
        }
        newsong.artist = newsong.artists.reduce((pre, cur) => {
            return pre + "&" + cur;
        });

        

    }).catch((error) => {
        console.log(error);
    });

    await axios({
        url: interface.qqRid + songid.mid,
        method: "get",
    }).then( (response) => {
        // console.log(response.data)
        newsong.url = response.data.data.url
        // console.log(newsong.url)
    }).catch( (error) => {
        console.log(error)
    })

    await axios({
        url: interface.qqLyric + songid.mid,
        method: "get",
    }).then( (response) => {
        // console.log(response.data)
        newsong.lyric = response.data.lyric
        // console.log(newsong.url)
    }).catch( (error) => {
        console.log(error)
    })

    //第二部同样await

    //console.log(songs);
    return newsong;
}

module.exports = searchmusic;
