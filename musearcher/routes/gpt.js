var express = require("express");
var router = express.Router();
const { spawn } = require('child_process');
const runPythonScript = require('./GPT/gpt_config');

const pythonScript = 'gpt_py.py';

router.get('/', function(req, res, next) {
    res.render('gpt');
    
  });

router.post('/', function(req, res, next) {
    const input = req.body.input;
    const type = req.body.type;
    console.log(req.body);
    
    runPythonScript(input)
    .then((result) => {
    console.log('输出结果:', result);
    res.send({
      type: 200,
      content:result
    });
    // 在这里进行进一步的处理或发送响应等操作
    })
    .catch((error) => {
    console.error('发生错误:', error);
    // 处理错误情况
    });
    // res.send({
    //   type: 200,
    //   content:"测试"
    // });
    
      
  
});

module.exports = router;