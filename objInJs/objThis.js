// this keyword is just uused  in object..

// Where we create or call an object then we use this keyword. otherwise this keyword doesnot woeks..


function Person(name,email,password) {
      this.name = name;
      this.email = email;
      this.password = password;
}

var P1 = new Person('zamshed alam','zamshedl@gmail.com', 'zam233$$##')


console.log(P1);


 function fun(name,age) {
    this.name = name;
    this.age = age;
 }

 // var P = new fun('mz', 22)
  var P =  fun('mz', 22)

console.log(P);
