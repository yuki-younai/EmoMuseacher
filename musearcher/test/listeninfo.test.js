const supertest = require("supertest");
const request = supertest("http://localhost:3000");
const addContext = require("mochawesome/addContext");

/*

describe("test listen info", function () {
  it("test add new listen info", function (done) {
    var _this = this;
    request
      .post("/listeninfo")
      .send({
        songname: "testlisteninfo",
        songsrc: "",
        singer: "testSinger",
        id: "890131323",
        platform: "qq",
        songId: "002W4hBv3RK2OE",
        albumId: "004Z12BC3uSIcg",
      })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        addContext(_this, {
          title: "Response Data",
          value: { data },
        });
        done();
      });
  }).timeout(8000);

  it("test update old listen info", function (done) {
    var _this = this;
    request
      .post("/listeninfo")
      .send({
        songname: "testlisteninfo",
        songsrc: "",
        singer: "testSinger",
        id: "890312323",
        platform: "qq",
        songId: "002W4hBv3RK2OE",
        albumId: "004Z12BC3uSIcg",
      })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        addContext(_this, {
          title: "Response Data",
          value: { data },
        });
        done();
      });
  }).timeout(8000);
});*/
