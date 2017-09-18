const penthouse = require('penthouse');
const fs = require('fs');
const minify = require('harp-minify').css;

const penthouseOptions = JSON.parse(process.argv[2]);

const STDOUT_FD = 1;
const STDERR_FD = 2;

penthouse(penthouseOptions).then(function(criticalCss) {
  fs.writeSync(STDOUT_FD, minify(criticalCss));
}).catch(function(err) {
  fs.writeSync(STDERR_FD, err);
  process.exit(1);
});
