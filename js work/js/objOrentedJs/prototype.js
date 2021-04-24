  // In object_orented javaScript, we can use prototype. By using prototype, we can share a value in a lot of object in class
  // commonly. By using prototype, we can share a value differnt obj. which can save our storage. Most of the time
  // prototype use for the value. For making a  prototype obj, calling syntax is ---- (classname.prototype.key = value;)......

              // Simple prototype Example----

//   var Mobile = function (name, model, price, isAvilable) {
//     this.name = name;
//     this.model_no = model;
//     this.price = price;
//     this.isAvilable = isAvilable;
//
//   }
//
// var Nokia = new Mobile('Nokia', 'nokia 8.2', 40000, true);
// var Samsung = new Mobile('Samsung', 'Glaxy A7', 27000, true);
//
//
// // Samsung.color = 'white';
// // Nokia.color = 'white';
//
// Mobile.prototype.color = 'white';
//
// console.log(Nokia);
// console.log(Samsung);
//

function Person (name, age) {
  this.name = name;
  this.age = age;

}

var a = new Person;

Person.prototype.print = function () {

  console.log(`name: ${person.name}`);

}

console.log(a);
