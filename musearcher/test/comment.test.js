const supertest = require("supertest");
const request = supertest("http://localhost:3000");
const addContext = require("mochawesome/addContext");
var expect = require("chai").expect;
/*
describe("test comment", function () {
  it("test GET /comment", function (done) {
    var _this = this;
    request
      .get("/comment")
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        addContext(_this, {
          title: "Response Data",
          value: res.body,
        });
        done();
      });
  }).timeout(5000);

  it("test write comment", function (done) {
    var _this = this;
    request
      .post("/comment")
      .send({
        id: "123124143",
        username: "testcomment",
        comment: "this is a comment",
      })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        addContext(_this, {
          title: "Response Data",
          value: res.body,
        });
        done();
      });
  }).timeout(5000);
});
*/
