const fs = require('fs');
const path = require('path');

module.exports = function(directory, fileExtension, callback) {
  fs.readdir(directory, function (err, files) {
    if (err) return callback(err);
    let fileList = [];
    let ext = '.' + fileExtension;
    files.forEach(function(file) {
      if (path.extname(file) === ext) {
        fileList.push(file);
      }
    });
    callback(err, fileList);
  })
}
