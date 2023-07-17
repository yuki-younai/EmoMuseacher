const supertest = require("supertest");
const request = supertest("http://localhost:3000");
const addContext = require("mochawesome/addContext");
var expect = require("chai").expect;
/*

describe("test login", function () {
  it("test login", function (done) {
    var _this = this;
    request
      .post("/sign-in")
      .send({
        name: "test",
        pwd: "password",
        type: "login",
      })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        expect(data.code).to.be.equal(200);
        addContext(_this, {
          title: "Response Data",
          value: res.body,
        });
        done();
      });
  }).timeout(5000);

  it("test login with wrong username", function (done) {
    var _this = this;
    request
      .post("/sign-in")
      .send({
        name: "test2",
        pwd: "password",
        type: "login",
      })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        expect(data.code).to.be.equal(400);
        addContext(_this, {
          title: "Response Data",
          value: res.body,
        });
        done();
      });
  }).timeout(5000);

  it("test login with wrong password", function (done) {
    var _this = this;
    request
      .post("/sign-in")
      .send({
        name: "test",
        pwd: "password1",
        type: "login",
      })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        expect(data.code).to.be.equal(400);
        addContext(_this, {
          title: "Response Data",
          value: res.body,
        });
        done();
      });
  }).timeout(5000);
});
*/
