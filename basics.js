//Javascrip is a interpreted language <no compiletime error, line by line execution and results on the fly>

console.log(sum(6,10)) //error, 16(call the fun)

function sum(a,b){
    //console.log(this)
    return a+b
}

console.log(sum(6,10))