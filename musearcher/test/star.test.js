const supertest = require("supertest");
const request = supertest("http://localhost:3000");
const addContext = require("mochawesome/addContext");
var expect = require("chai").expect;

/*
describe("test star", function () {
  it("test starset", function (done) {
    var _this = this;
    request
      .post("/star/starset")
      .send({
        id: "123190930",
        song: "奔向你",
        artist: "周深",
        img: "https://y.gtimg.cn/music/photo_new/T002R300x300M000004CbdnP3GiyL7.jpg",
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
  }).timeout(5000);

  it("test starset (with existed info)", function (done) {
    var _this = this;
    request
      .post("/star/starset")
      .send({
        id: "123190930",
        song: "奔向你",
        artist: "周深",
        img: "https://y.gtimg.cn/music/photo_new/T002R300x300M000004CbdnP3GiyL7.jpg",
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
  }).timeout(5000);

  it("test starget", function (done) {
    var _this = this;
    request
      .post("/star/starget")
      .send({
        id: "41611157",
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
  }).timeout(5000);
});
*/
