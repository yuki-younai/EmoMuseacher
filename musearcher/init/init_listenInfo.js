const axios  = require("axios");

var rankingListSrc = "http://iecoxe.top:5000/v1/qq/top/?topId=26"
var playListSrc = "http://iecoxe.top:5000/v1/qq/playlist/info?pid=7489569642"
var listenInfoRouter = "http://localhost:3000/listeninfo"

let Rand = Math.random()
var id = Math.round(Rand * 100000000) //虚拟用户id

async function initListenInfo_byRankingList() {
    await axios({
        method: "get",
        url: rankingListSrc
    }).then( (res) => {

        // console.log(res.data.detail.data.data.song);
        // for(let song of res.data.cdlist[0].) {
        for(let song of res.data.detail.data.data.song) {

            
            let data = {
                "songname": song.title,
                "songsrc": undefined,
                "singer": song.singerName,
                "id": id,
                "username": undefined,
                "platform": "qq",
                "songId": song.mid
            }

            axios({
                method: "post",
                url: listenInfoRouter,
                data: data
            }).catch( (err) => {
                // console.log(err);
            })
        }
    }).catch( (err) => {
        // console.log(err)
    })
}

async function initListenInfo_byPlayList() {
    await axios({
        method: "get",
        url: playListSrc
    }).then( (res) => {

        // console.log(res.data.detail.data.data.song);
        for(let song of res.data.cdlist[0].songlist) {
            
            // let singer = song.singer.reduce( (pre, cur) => { //singer数组转String
            //     return pre + "&" + cur.name;
            // })
            let singer = ""
            for(let item of song.singer) {
                singer += ("&" + item.name)
            }
            singer = singer.slice(1);
            console.log(song.title);
            
            let data = {
                "songname": song.title,
                "songsrc": undefined, 
                "singer": singer,
                "id": id,
                "username": undefined,
                "platform": "qq",
                "songId": song.mid,
                "albumId": song.album.mid
            }

            axios({
                method: "post",
                url: listenInfoRouter,
                data: data
            }).catch( (err) => {
                // console.log(err);
            })
        }
    }).catch( (err) => {
        // console.log(err)
    })
}

initListenInfo_byPlayList();

//初始化
//node init_listenInfo.js