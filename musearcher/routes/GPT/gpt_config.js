const { spawn } = require('child_process');
const pythonScript = './gpt.py';

module.exports = function(content) {
  return new Promise((resolve, reject) => {
    let out = '';
    let sta="You are now a music recommendation model and you can recommend songs for me based on the following description. Your final song recommendation format will be: 1. Song title - basic description of the music in 10 words or less. Please note that you are only recommending 5 songs. Delete SURE at the beginning and ENJOY at the end. Here is a description of my music:";
    const childProcess = spawn('python', [pythonScript, sta+content]);

    childProcess.stdout.on('data', (data) => {
      out += data.toString().trim();
    });

    childProcess.stderr.on('data', (data) => {
      const error = data.toString().trim();
      reject(error);
    });

    childProcess.on('close', (code) => {
      //console.log('Python函数返回值:', out);
      resolve(out);
    });
  });
};
