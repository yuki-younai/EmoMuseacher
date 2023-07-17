const supertest = require("supertest");
const request = supertest("http://localhost:3000");
const addContext = require("mochawesome/addContext");

/*
describe("test search", function () {
  it("test with artist", function (done) {
    var _this = this;
    request
      .post("/search")
      .send({
        searchMusic: "周杰伦",
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

  it("test with songname", function (done) {
    var _this = this;
    request
      .post("/search")
      .send({
        searchMusic: "海阔天空",
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

  it("test with songname and artist", function (done) {
    var _this = this;
    request
      .post("/search")
      .send({
        searchMusic: "爱你王心凌",
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

  it("test fuzzy search", function (done) {
    var _this = this;
    request
      .post("/search")
      .send({
        searchMusic: "周杰fea",
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
});
*/
