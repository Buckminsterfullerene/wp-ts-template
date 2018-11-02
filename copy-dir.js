const fse = require('fs-extra');


fse.copy(process.argv[2], process.argv[3], err => {
  if (err) return console.error(err);
  console.log('\x1b[33m%s\x1b[0m', 'Copy success!');
  console.log('\x1b[33m%s\x1b[0m', ' - Copied \'' + process.argv[2] + '\' to \'' + process.argv[3] + '\'');
});
