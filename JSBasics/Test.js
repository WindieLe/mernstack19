//-commenting - single line comment(ctrl+/ - toggle)
/*
comments for thr code
*/

console.log("Hello World!!")

var i = 1000; //var keyword is used to initialize the variables in js 

//buit in lopp funcrion
// setInterval(function(){
//     console.log(++i)
// }, 1000)

//REPL - Read, Evaluate, Print and Loop
//Stop execution - ctrl + c

function sum(a,b){
    return a+b
}

//Arithmatic - is class and sum is class member (give behavior)
// Arithmatic obj = new Arithmatic()
// obj.sum(5,6)

console.log(sum(6, 10)) // function invocation, callling

var sumValue = sum(6,10)
console.log(sumValue)

sumValue = 2000;
console.log(sumValue)

sumValue = 2000;
console.log(sumValue)

sumValue="This was initialized as number but now is a string";
console.log(sumValue)


// Recap -
// Objects, Inheritance, Assign, Create
// Functions, overloading, 
// Closures
// Literals
// CallBack-Nesting
// Hoisting
// Datatypes
// Modules