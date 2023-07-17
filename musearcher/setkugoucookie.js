const axios = require("axios");
var express = require('express');

const interface = require("./setting");

axios({ //await等待行为结束才会进行下一步
    method: 'post',
    url: interface.kugouSetCookie,
    //responseType: 'json',
    data: {
        data: interface.kugouCookie
    }
}).catch( (error) => {
    console.log(error);
})


