const supertest = require("supertest");
const request = supertest("http://localhost:3000");
const addContext = require("mochawesome/addContext");
var expect = require("chai").expect;

describe("test searchandplay", function () {
  it("test 1", function (done) {
    var _this = this;
    request
      .post("/searchandplay")
      .send({
        searchMusic: "爱你王心凌",
      })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        addContext(_this, {
          title: "Response Data",
          value: data,
        });
        done();
      });
  }).timeout(5000);
});
