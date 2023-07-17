const supertest = require("supertest");
const request = supertest("http://localhost:3000");
const addContext = require("mochawesome/addContext");
var expect = require("chai").expect;

/*

describe("test rankinglist", function () {
  it("test rankinglist 1", function (done) {
    let _this = this;
    request
      .post("/rankinglist/1")
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        let length = res.body.length;
        expect(length).to.be.equal(50);
        addContext(_this, {
          title: "Response Data length",
          value: { length },
        });
        addContext(_this, {
          title: "Response Data",
          value: data,
        });
        done();
      });
  }).timeout(5000);
  it("test rankinglist 2", function (done) {
    let _this = this;
    request
      .post("/rankinglist/2")
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        let length = res.body.length;
        expect(length).to.be.equal(50);
        addContext(_this, {
          title: "Response Data length",
          value: { length },
        });
        addContext(_this, {
          title: "Response Data",
          value: data,
        });
        done();
      });
  }).timeout(5000);
  it("test rankinglist 3", function (done) {
    let _this = this;
    request
      .post("/rankinglist/3")
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        let length = res.body.length;
        expect(length).to.be.equal(50);
        addContext(_this, {
          title: "Response Data length",
          value: { length },
        });
        addContext(_this, {
          title: "Response Data",
          value: data,
        });
        done();
      });
  }).timeout(5000);
  it("test rankinglist 4", function (done) {
    let _this = this;
    request
      .post("/rankinglist/4")
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        let data = res.body;
        let length = res.body.length;
        expect(length).to.be.equal(50);
        addContext(_this, {
          title: "Response Data length",
          value: { length },
        });
        addContext(_this, {
          title: "Response Data",
          value: data,
        });
        done();
      });
  }).timeout(5000);
});
*/
