// Global objects in node:
// global object: can access it anywhere in any files

/* 
// These are global functions:
console.log("");

setTimeout(); // to call a function after a delay
clearTimeout();

setInterval(); // repeatedly call a function after a given delay
clearIinterval();
*/

/*
 all the function in javascript are belong to the "window" objecct.
 for example: console.log is actually window.console.log

 But in Node, all functions are belong to the "global" object.
 for example: console.log is actually global.console.log
*/

// variables are not belong to "global" object in Node
// example:
var message = "";
console.log(global.message); // will show "undefined"

