//Hoisting This is kind of a snasht of all the javascript, function, variables present in the whole file
//and gets hoisted on top of file (so we call it partially compiled)
//Hoisting happen in two ways:
//1.Function Hoisting- A function gets hosited with its complete definition and so we will be able to execute 
// the same before declaration
//2.Variable Hoisting - Variable gets hoisted with default value of js (undefined)

//10 - variables
//6 - functions

// console.log(myVar) //undefined

// //MyFunc("Hoised") //this is function hoisting Hoised
// MyFunc(myVar) //this is function hoisting

// function MyFunc(val){
//     console.log("This is function hoisting", val)
// }

// var myVar = "I am hoised var"

// console.log(myVar)

// MyFunc(myVar) //Output: This is function hoisting I am hoisted var

var newVal = "Interesting"//global variable

function Random(){
    console.log(newVal)//undefine if newVal declared within the function
                        //Interesting when newVal no declaretion inside the function

    // var newVal = "Interested"
    VeryRandoom()
    function VeryRandoom(){
        console.log(newVal)
    }
}

Random()