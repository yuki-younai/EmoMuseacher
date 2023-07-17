// var host = "http://iecoxe.top:5000"
const host = "http://localhost:5000";

module.exports = {
  kugouSearch: host + "/v1/kugou/search?key=",
  kugouRid: host + "/v1/kugou/song?", //需要选择参数aid和hash
  // aid = AlbumID; hash = HQFileHash
  kugouSetCookie: host + "/v1/kugou/setcookie/",
  kugouGetCookie: host + "/v1/kugou/getcookie/",

  miguSearch: host + "/v1/migu/search?key=",

  kuwoSearch: host + "/v1/kuwo/search?key=",
  kuwoRid: host + "/v1/kuwo/song?rid=",

  qqSearch: host + "/v1/qq/search?key=",
  qqRid: host + "/v1/qq/song?mid=",
  qqImage: "https://y.gtimg.cn/music/photo_new/T002R300x300M000",
  qqLyric: host + "/v1/qq/lyric/?mid=", //qq音乐通过mid获取歌词
  qqRankingList: host + "/v1/qq/top/?topId=", //通过topId获得榜单的详情

  kugouCookie:
    "kg_mid=533195f4817bd2ea76d3e67a8ca58125; kg_dfid=3MnFD74C5SfC3mhZUl28idqW; kg_dfid_collect=d41d8cd98f00b204e9800998ecf8427e; Hm_lvt_aedee6983d4cfc62f509129360d6bb3d=1665467052,1666007205,1666345551; KuGooRandom=66231666345557054; KuGoo=KugooID=2042723218&KugooPwd=57DC302587E1DBFE619A2D6E1660CF19&NickName=%u0032%u0030%u0034%u0032%u0037%u0032%u0033%u0032%u0031%u0038&Pic=http://imge.kugou.com/kugouicon/165/20100101/20100101192931478054.jpg&RegState=1&RegFrom=&t=e060c63fe7b373a067bd5cd38d480f5eff85c06ef026d82b79f22a10842f0948&t_ts=1666366313&t_key=&a_id=1014&ct=1666366313&UserName=%u0032%u0030%u0034%u0032%u0037%u0032%u0033%u0032%u0031%u0038; KugooID=2042723218; t=e060c63fe7b373a067bd5cd38d480f5eff85c06ef026d82b79f22a10842f0948; a_id=1014; UserName=%u0032%u0030%u0034%u0032%u0037%u0032%u0033%u0032%u0031%u0038; mid=533195f4817bd2ea76d3e67a8ca58125; dfid=3MnFD74C5SfC3mhZUl28idqW; kg_mid_temp=533195f4817bd2ea76d3e67a8ca58125; CheckCode=czozMjoiMTFjNTQ0Y2IzMTRjNWI0YmM4YmNhMzk3M2I0YmIzZDEiOw%3D%3D; ACK_SERVER_10015=%7B%22list%22%3A%5B%5B%22bjlogin-user.kugou.com%22%5D%5D%7D; ACK_SERVER_10016=%7B%22list%22%3A%5B%5B%22bjreg-user.kugou.com%22%5D%5D%7D; ACK_SERVER_10017=%7B%22list%22%3A%5B%5B%22bjverifycode.service.kugou.com%22%5D%5D%7D; Hm_lpvt_aedee6983d4cfc62f509129360d6bb3d=1666419631",
  mv: host + "/v1/wy/mv_url?wid=",
  mvSearch: host + "/v1/wy/search?key=",

  uploadMusicDir: "upload_music/",
};
