// Instead of creating/initializing many variables if we assign into another object mainly array and json object
// this kind of mapping is termed as destructuring

//1. Array Destructuring - when we read the data from array and assign them to another variables

//a. Direct assignment in array to array
//let sessionsList = ["AWS", "MERNStack", "JAVA"]

// let Session1 = sessionsList[0]
// let Session2 = sessionsList[1]
// let Session3 = sessionsList[2]

// let [Session1, Session2, Session3, Session4, Session5, Session6, Session7] = ["AWS", "MERNStack", "JAVA", "DSA", "Data Analytics", "AI-ML"] //sessionsList

// console.log(Session1)
// console.log(Session2)
// console.log(Session3)
// console.log(Session7) //undefined - if nothing present at array index

//b. we can use rest param to assign remaing array
// ... - represents rest operator and holds rest of the values in a separate array

// let [Session1, Session2, Session3, ...Session] = ["AWS", "MERNStack", "JAVA", "DSA", "Data Analytics", "AI-ML"] //sessionsList

// console.log(Session1)
// console.log(Session2)
// console.log(Session3)
// console.log(Session) //holds last three elements in an array

//c. Data swapping can be done easily - values are swapped with variables

let a = "New A", b = "New b";

[a, b] = [b, a]

console.log(a)
console.log(b)

//2. Object desructuring allows us to read data from objects without multiple initialization

//a. Single object destructuring

// let Assessment = {
//     Name : "Jugue",
//     Standard : "Professional",
//     Marks : {
//         Java : 10,
//         Mernstack : 8,
//         ES6 : 9
//     }
// }

// let name = Assessment.Name;
// let MERNStack = Assessment.Marks.Mernstack

// let {Name, Standard } = Assessment

// console.log(Name)
// console.log(Standard)

//b. Nested Destructuring - we read the data from the nested object

// e.g. - Reading marks from nested Marks object

// let {Name, Marks : {Java, Mernstack, DSA = 9.5 }} = Assessment

// console.log(Name)
// console.log(Mernstack)
// console.log(DSA)




// //Practice - 
let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//QUESTION FOR PRACTICE
//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student
let{
    FirstName,
    TotalMarks,
    Subject:{
        Physics,
        Chemistry,
        Language,
        Ecology= 95
    },
    LastName="Le"
}=Student;

console.log(`First name: ${FirstName}`)
console.log(`Total marks: ${TotalMarks}`)
console.log(`Physics: ${Physics}`);
console.log(`Chemistry: ${Chemistry}`);
console.log(`Language: ${Language}`);
console.log(`Ecology: ${Ecology}`);
console.log(`Last Name: ${LastName}`);

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 
let aspirayions=["Graduate", "get the job", "get master's degree", "11111", "222222"]
let[aspirayion2024, aspirayion2025, aspirayion2026, ...rest]=aspirayions

console.log(aspirayion2024)
console.log(aspirayion2025)
console.log(aspirayion2026)
console.log(rest)
//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0
function multiply(a= 0, b= 0, c= 0 ){
    return a*b*c;
}
console.log(multiply(2,3,2)) //output=12
console.log(multiply(2,4))     //=0

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
let arr=[1, 2, 3, 4, 5]
arr[5]= 6
//of loop
for(let value of arr){
    console.log(value)
}
//in loop
for(let index in arr){
    console.log(index, arr[index])
}


//create an example of const where we can update on property of the object, where it says const is mutable
const person={name: "Windie", age: 20};
person.age=30;
person.city="New York"

console.log(person)


//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 
//var
for(var i= 1;i<=5;i++){
    setTimeout(function(){
        console.log("Using var: ", i)
    }, 2000);
}
//using let
for(let i=1; i<=5;i++){
    setTimeout(function(){
        console.log("Using let: ", i)
    }, 2000);
}