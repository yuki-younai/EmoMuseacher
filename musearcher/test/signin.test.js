const supertest = require("supertest");
const request = supertest("http://localhost:3000");
const addContext = require("mochawesome/addContext");
var expect = require("chai").expect;

/*

describe("test sign in", function () {
  it("test register", function (done) {
    var _this = this;
    request
      .post("/sign-in")
      .send({
        name: "test1",
        pwd: "password",
        type: "register",
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

  it("test register with long username", function (done) {
    var _this = this;
    request
      .post("/sign-in")
      .send({
        name: "testpasswordtestpasswordtestpasswordtestpassword",
        pwd: "password",
        type: "register",
      })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        expect(data.code).to.be.equal(-1);
        addContext(_this, {
          title: "Response Data",
          value: res.body,
        });
        done();
      });
  }).timeout(5000);

  it("test register with long password", function (done) {
    var _this = this;
    request
      .post("/sign-in")
      .send({
        name: "testpassword",
        pwd: "passwordpasswordpasswordpasswordpassword",
        type: "register",
      })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        expect(data.code).to.be.equal(-2);
        addContext(_this, {
          title: "Response Data",
          value: res.body,
        });
        done();
      });
  }).timeout(5000);

  it("test register with existed username", function (done) {
    var _this = this;
    request
      .post("/sign-in")
      .send({
        name: "a",
        pwd: "password",
        type: "register",
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
