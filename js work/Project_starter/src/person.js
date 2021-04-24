class Person {
  constructor(id, name, email){
    this.id = id,
    this.name = name,
    this.email = email
  }
  print(){
    console.log(`name: ${this.name}, email: ${this.email}`)
  }
}
// let p1 = new Person(1, 'mz', 'msmsmsdmsm@gmail.com')
//
// console.log(p1);
 class Student extends Person {

  constructor(id, name, email, roll, dept){
    super(id, name, email)
    this.roll = roll;
    this.dept = dept;
  }
  print(){
    super.print();
    console.log(`Department: ${this.dept}, ID: ${this.id}`)
  }
}

export default Student;
