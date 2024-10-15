// Questions -
// 1.Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
class Person {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  
    // Function to return person details
    getInfo() {
      return `Name: ${this.name}, Gender: ${this.gender}`;
    }
  }
  //Inherit Person
  class Student extends Person{
    constructor(name, gender, major){
      super(name, gender);
      this.major = major;
    }
    getInfo(){ //override the function
      return `${super.getInfo()}, Major: ${this.major}`;
    }
  }

  var person = new Person("Windie", "Female");
  console.log(person.getInfo());
  var student = new Student("Julie", "Female", "CS")
  console.log(student.getInfo());
//2. Inherit should be done both way's constructor and Object.Create
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.getInfo = function() {
    // Call the parent method and add the major
    return `${Person.prototype.getInfo.call(this)}, Major: ${this.major}`;
};
const student2 = new Student("Alice", "Female", "Mathematics");
console.log(student2.getInfo());  

// 3.Create three objects and merge their propeties
var obj1 = {Name: "Henry",Age: 25};
var obj2 = {Gender: "Male", Location: "Seattle"};
var obj3 = {Profession:"Engineer", Hobby: "Reading"};

var mergedObject = Object.assign(obj1, obj2, obj3);
console.log(mergedObject);

// 4.Create a logical example of closure
function Account(name, age, balance, type){
  var accName = name
  var accAge = age
  var accBalance = balance
  var accType = type
  var accountDetails = function(){
    return `Name: ${accName}, Age: ${accAge}, Balance: ${accBalance}, Type: ${accType}`;
  }
  return accountDetails;
}
var accountInfo = Account("Shophia", 18, 2000, "credit");
console.log(accountInfo());
// Share few data objects from one file to another
var {user1, user2, user3} = require("./dataExerc1");

console.log(user1);
console.log(user2);
console.log(user3);