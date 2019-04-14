// main module here

// To load the module:

const logger = require('./04_another_module');
// return the object that is exported from the target module

console.log(logger);

logger.log("module get!");

// trick: use jshint ___.js
// this will scan errors in the js file
