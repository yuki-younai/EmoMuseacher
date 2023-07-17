const axios = require("axios");
var express = require('express');

const mv = require("./mv");
const interface = require("../../setting");

async function searchmusic(searchContent) { //设为async函数，因为有axios存在等待行为。

    var searchSrc = interface.mvSearch + searchContent + "&type=1004"; //输入搜索地址
    var mvList = [];
    var searchSrcs2 = []; //歌曲rid搜索列表
    var mvs = [];

    console.log("searchSrc", searchSrc)

    await axios({ //await等待行为结束才会进行下一步
        method: 'get',
        url: searchSrc,
        responseType: 'json'
    }).then( (response) => {   //response:搜索结果对象
        // console.log(response.data.result.mvs);

        for(var mvid of response.data.result.mvs) { //页面信息在response.data中
            let searchSrc2 = interface.mv + mvid.id;
            searchSrcs2.push(searchSrc2);
            // console.log(searchSrc2)
            let newmv = new mv();
            newmv.name = mvid.name;
            newmv.pic = mvid.cover;
            newmv.artist = mvid.artistName;
            // newmv.
            mvs.push(newmv)
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
            if(resArr[i].data.code == 200) { //成功获取url的歌曲有8调信息，其他的只有7条
                mvs[i].url = resArr[i].data.data.url;
                //console.log(mvs[i].url);
            }
        }
        //console.log(mvs); //最终的结果mvs列表
    }).catch((error) => {
        console.log(error);
    });
    

    console.log(mvs);
    return mvs;
}

module.exports = searchmusic;