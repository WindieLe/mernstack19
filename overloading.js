//Same name method but have different signatures, and number of parameter
//No overloading concept in JS, but we have over-writing
//Whatever function defined in last will be working all others will be replaced

// function Sum(){
//     console.log("Nothing to Sum")
// }
// Sum()
// function Sum(a){
//     console.log("Sum of a", a)
// }
// Sum(1)

// function Sum(a,b){
//     console.log("Sum of a, b", a+b)
// }
// Sum(1,2)

// function Sum(a,b,c){
//     console.log("Sum of a,b,c", a+b+c)
// }
// Sum(1,2,3)

var Sum = function (a,b,c, d) {
    console.log("Sum of a, b and c, d", a+b+c+d)
}

Sum(1,2,3,4) //output=10