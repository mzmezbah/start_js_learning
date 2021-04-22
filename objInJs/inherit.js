// In js we can share data one obj to another obj by inheritence. for this we can use 'call' 'apply' method like under function,
// But in prototype doesnot share like that..we can share prototype
// in two ways ..but when we share peototype we can need to declare prototype constructor like under...


function person(name,age) {
    this.name = name;
    this.age = age;
}

person.prototype.printName = function () {
  console.log(this.name+ ' '+ this.age);
}


function student(id,name,age,roll,standard) {
    this.id = id;
    person.call(this,name,age)
    this.roll = roll;
    this.standard = standard;
}

 student.prototype = Object.create(person.prototype);  //most of the time use it..it take sort time of runl

// Object.setPrototypeOf(student.prototype, person.prototype)
student.prototype.constructor = student;



var Student = new student(1,'mezbah',22,2,'class-3')
console.log(Student);
