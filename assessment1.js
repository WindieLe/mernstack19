//March - MERNStack Session - Assessment Number 1 - 2nd October 2024
//Q1. Create a file with name basics and show all the features that you know about javascript?
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance
//Function: A function is a block of code designed to perform a particular task. 
//Hosting: Hoisting is JavaScript's default behavior of moving declarations to the top.
//Closure: A closure is a function that retains access to its parent scope, even after the parent function has closed.
// Literals: are fixed values that are directly in the source code, such as numbers, strings, or object literals.
//A callback is a function passed as an argument to another function, which is invoked later.


//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
var variable ="Robert";
console.log(variable, typeof variable);

variable= .0266;
console.log(variable, typeof variable);

variable= false;
console.log(variable, typeof variable);

variable= {myname : "Test Me"};
console.log(variable, typeof variable);

variable= 25166665;
console.log(variable, typeof variable);

variable= undefined;
console.log(variable, typeof variable);

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function
function showUserInfo(firstname, lastname, age){
    console.log("First Name:",firstname);
    console.log("Last Name:", lastname);
    console.log("Age", age);
}
showUserInfo("Windie", "Le", 20);

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!
function doaddition(a, b, c){
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a+b+c;
}
console.log("add(2, 3, 4):", doaddition(2, 3, 4));               
console.log("add(2):", doaddition(2));                            
console.log("add(2.3, 3):", doaddition(2.3, 3));                  
console.log('add("first", 2, "three"):', doaddition("first", 2, "three")); 

//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable:", outerVariable);
        console.log("Inner Variable:", innerVariable);
    };
}

var newFunction = outerFunction("I am from the outer scope");
newFunction("I am from the inner scope");
// b. hoisting, 
console.log(hoistedVar); 
var hoistedVar = 5;

hoistedFunction(); 
function hoistedFunction() {
    console.log("This function is hoisted!");
}
// c. constructor function
function Person(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    
    this.getFullName = function() {
        return this.firstname + " " + this.lastname;
    };
}
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

console.log(person1.getFullName()); 
console.log(person2.getFullName());


//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?

//call: Executes a function with a specific this context and comma-separated arguments.
//apply: Executes a function with a specific this context and arguments as an array.
//bind: Returns a new function with a specific this context and optionally initial arguments, but doesn't execute it immediately.

//the difference between bind and apply:
// apply: Immediately executes with arguments as an array.
// bind: Returns a new function for later execution with a bound this.

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.
var student = {
    name: "John",
    age: 21,
    getDetails: function() {
        setTimeout(function() {
            console.log("Name:", this.name, "Age:", this.age);
        }.bind(this), 1000); 
    }
};
student.getDetails();

//Q8. Create an example of creating object with null prototype
var obj = Object.create(null);

//Q9. How do we merge different objects properties using Object class function
var obj1= {name:"John", age: 30};
var obj2= {city: "New York"};
var obj3= {country: "USA"};

var mergedObject = Object.assign({},obj1, obj2, obj3);
console.log(mergedObject);

//Q10. Create an object literal and export it to another file and import and show that there
var student = require('./dataAssess1');

console.log(student.getDetails());

