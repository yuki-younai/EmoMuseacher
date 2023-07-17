const axios = require("axios");
var express = require('express');


const song = require("../search/song");
const interface = require("../../setting");
var search = require("./search")

var songs = []
var searchSrcs2 = [];

async function getsong() {
    for(let item of songs) {
        await search(item.name + "_" + item.artist).then( response => {
            item = response;
            console.log(item);
        })
    }
}

async function getrankinglist(topId) {
    songs = []

    var rangkingListSrc = interface.qqRankingList + topId
    // console.log(rangkingListSrc)
    await axios({
        method: 'get',
        url: rangkingListSrc,
        responseType: 'json'
    }).then( (response) => {
        let num = 0;
        for(let music of response.data.detail.data.data.song) { 
            num ++;
            if(num == 51) break;
            let newsong = new song()
            newsong.name = music.title
            newsong.artist = music.singerName
            newsong.pic = interface.qqImage + music.albumMid + ".jpg"
            //newsong.HASH = song.HASH;
            songs.push(newsong)
            
            
        }
    }).catch( (error) => {
        console.log(error)
    })

    // await getsong();

    // console.log(songs);
    return songs;
}

module.exports = getrankinglist;