'use strict';

module.exports = exports = {};
/**
 * 
 * readFile - reads the file
 * @param  {} file
 * @param  {} cb
 */
exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    cb(undefined, new Buffer('File Contents'));
  }
};
/**
 * 
 * writeFile - writes the file
 * @param  {} file
 * @param  {} cb
 */
exports.writeFile = (file, buffer, cb) => {
  if(file.match(/bad/i)){
    cb('Invalid file');
  }else{
    cb(undefined, Buffer.from('File Contents'));
  }
};