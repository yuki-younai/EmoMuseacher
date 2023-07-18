var express = require("express");
var router = express.Router();

/* GET search page. */
router.get("/", function (req, res, next) {
    res.render("sysmusic"); //用某对象的某个变量值一同来渲染一个特定的模板，然后将结果作为响应发送。
  });

module.exports = router;