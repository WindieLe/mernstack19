var student = {
    name: "Sophia",
    age: 25,
    course: "Computer Science",
    getDetails: function(){
        return `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`;
    }
};

module.exports = student;