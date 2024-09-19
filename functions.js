//A function is a block of code which gives behaviour we expect to some job.
//Area - square(param), reactangle(length, width), circle(radius), X-> Sphere()
//In JS function are not nessarily to be directly associated with class object, it can work independently
//Functions are pure functions, a pure function will always return something, if a user doesn't return anything from 
//the function JS runtime will attach a default(undefined) value to it<CAN BE DEMONSTRATED ON THE BROWER CONSOLE)

//keywork function- function name-(parameters)
function name(params){
    //definition of the function
    //scope of the function
}

//1.Name function
function print(){
    console.log("Jimmy")
}
print()// calling a function or function invocation

//2.Funtion Expression
var myFunc= function (a,b){ //un-named function
    return a*b
}
console.log(myFunc(5,6))

//3.IIFE - Immediately invocable function expression

// (function iife(name, age){
//     console.log("Name is registered as - ", name, age)
// })("Anthony", 25)

// iife()

//4.Constructor Function - have properties associated with them and those can be initialized via constrcutor and be futher 
//used as classes

function User(name, age, address){
    this.name = name,
    this.age = age,
    this.address = address;

    this.getUserDetails = function(){
        console.log("User Information Entered is -", this.name, this.age, this.address)
    }
}

var userObj = new User("Ben", 29, "Somewhere on earth!!")

userObj.session = "MERNStack"; //adding new property(this is with the help of prototype)

//overriding the existing definetion
userObj.getUserDetails = function(){
    console.log("User Information Entered is -", this.name, this.age, this.address, this.session)
}

console.log(userObj.getUserDetails)

var newUserObj = new User("New User", 29, "Somewhere on earth!!")
console.log(newUserObj.getUserDetails())

//5.Nested functions

var val = 15
function A(a){
    //console.log(b) //A can't access the lower value
    return function B(b){
        return function C(c){
            return function D(d){
                return a+b+c+d+val
            }
        }
    }
}

var objA= A(5)
var objB= objA(5)
var objC= objB(5)
var objD= objC(5)
console.log(objD)

//chain execution of nested functions

var result = A(5)(5)(5)(5)
console.log(result)