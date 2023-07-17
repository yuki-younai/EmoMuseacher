const supertest = require("supertest");
const request = supertest("http://localhost:3000");
const addContext = require("mochawesome/addContext");

/*
describe("test mvlist", function () {
  it("test search mv", function (done) {
    var _this = this;
    request
      .post("/mvlist")
      .send({
        searchMv: "周杰伦",
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
