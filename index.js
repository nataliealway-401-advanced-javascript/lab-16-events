'use strict';
const util = require('util');
const fs = require('fs');
const events = require('./modules/event.js');

//require modules
require('./modules/cache.js');
require('./modules/logger.js');

/**
 * This readFile function is a promise that reads the file
 * @param {object} file
 */
const readFile = util.promisify(fs.readFile);

/**
 * This writeFile function updates the file contents with the modified content
 */
const writeFile = util.promisify(fs.writeFile);

/**
 * function takes in the file's contents, changes them to strings and converts them to uppercase
 * @param {object} fileContents 
 */
const upperCaseContents = (fileContents) => {
  let upperCase = fileContents.toString().toUpperCase();
  return Buffer.from(upperCase);
};

const alterFile = (file) => {
  let upperCase = null;

  readFile(file)
    .then(fileContents => {
      upperCase = upperCaseContents(fileContents);
      return writeFile(file, upperCase)
        .then (() => {
          events.emit('readFile', file);
          events.emit('writeFile', file);
          events.emit('save', file);
        });
    })
    .catch(err => console.log(err));
};

let file = process.argv.slice(2).shift();
alterFile(file);


