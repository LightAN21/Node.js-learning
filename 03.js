/*
var print = function(){
	console.log("12345");
}

If we declare a function like this, as we know in 02.js, 
every function are belong to the "window" object.

If we define the same function in different files,
it'll cause problems(one function definition will be covered by another).

Therefore, we need to avoid defining variables and functions in the global scope.

We need to creat small building blocks or modules where we define our variables and functions.

*/

/*
	Important:
	Every file in a node application is considered a module.

	If we want to use a var of function in another file, we need to make it public(export)

*/

console.log(module); // here module is not a golbal object
