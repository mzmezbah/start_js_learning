import Person from './person';

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
