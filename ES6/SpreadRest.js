//Spread : is use to spread the elements of any object or array to used one by one
// It is done by using ... (spread the object)

let nameList = ["Ducan", "Windie", "Hongbo","Michael"]
// console.log(nameList[0])
// console.log(nameList[1])

// console.log(...nameList) //spread elements of array

let user = {
    id : 101,
    name : "Afroj",
    userType : "Paid",
    allowedReview : true,
    balance : "$1000"
}

let addresses = {
    id : 101,
    homeAddress : "Somewhere in Colorado",
    officeAddress : "Somewhere in Atlanta"
}

//merge 2 object (user and addresses)
// let delivery = object.assign({}, user, addresses)
let delivery = {...user, ...addresses}
addresses.available = "5PM"  //preserves the imutability
// console.log(delivery)

delivery = {...user, ...addresses}
// console.log(delivery)

//REST - parameter and perator : any array data can be passed as rest parameter in any function, but it should be 
// the last parameter, also when we try to assign values to rest operator it should be the last literal

let add = (a=0, b=0, c=0, d=0, e=0)=> a=b=c=d=e
let numberList = [1, 2, 3, 4, 5]
// console.log(add(...numberList)) //usage of spread operator

//we can use spread parameter instead for dynamic count of params

let addMax = function(...restNumberList){
    let sum = 0

    sum = restNumberList.reduce((prevNum, currNum)=>{
        return prevNum + currNum
    }, 0)// 0 - is initialized as prevNum
    return sum;
}

// console.log(addMax(...numberList)) //doest the job of passing dynamic and large list to be used in function

// console.log(addMax.apply(null, numList))//using apply function attached with each function to accept parameters as an array

//QUESTIONS :
//Spread Operator - 
//create a list of vaccines and print
let vaccines=["Pfizer", "HPV", "HBV"]
console.log(...vaccines)
//create doctor object and print his qualifications and other details using spread
let doctor ={
    id : 1,
    DrName : "Dr.Smith",
    specialty: "Cardiology",
    yearOfExperience : 20
}
console.log(`Id : ${doctor.id}`);
console.log(`name : ${doctor.name}`);
console.log(`Specialty : ${doctor.specialty}`);
console.log(`Year Of Experience: ${doctor.yearOfExperience}`);

//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread
let vaccine = {
    vaccineName : "Pfizer-BioNTech",
    dosesRequired : 2,
    price : 20,
    manufacturer: 'Pfizer'
}
let doctorWithVaccince ={...doctor,...vaccine}
console.log(doctorWithVaccince)
//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
function array(start, end){
    let result =[]
    for(let i = start; i <= end;i++){
        result.push(i);
    }
    return result;
}

let start = 100;
let end = 150;
console.log(array(start, end));
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
let numberArray = array(start, end)
let largestSum= function (...arrayOfNums) {
    let sum = 0

    sum = numbers.reduce((prevNum, currNum)=>{
        return prevNum + currNum
    },0)
    return sum;
}

console.log(largestSum(...numberArray))




