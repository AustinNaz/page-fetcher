args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

request(args[0], fetcher = function(error, response, body) {
  // console.log(typeof response.statusCode);
  if (response && response.statusCode === 200) {
    if (args[1].includes('./') && args[1].includes('.html')) {
      callback = function() {
        const stats = fs.statSync(args[1]);
        const fileSizeInBytes = stats.size;
        console.log(`Downloaded and Saved ${fileSizeInBytes} bytes to ${args[1]}`)
      }
      fs.writeFile(args[1], body, callback);
    } else {
      console.log('Incorrect file structure')
    }
  } else {
    console.log(`error ${response.statusCode}`)
  }
});