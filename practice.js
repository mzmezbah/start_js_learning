   var name = [ 'mezah', 'zia', 'zishan', 'haxan', 'oshan' ];
// console.log(name);
//
name[name.length] = 'zamshed';
console.log(name);
//
console.log(name.length);
name[name.length] = 'djsflaksfl';
console.log(name)
console.log(name.indexOf('mezah'));
// name.push('ms.zara');
// console.log(name);
name.sort();
console.log(name.sort());
//
name.splice(4);
//
console.log(name);
let num = 3
let index = name.findIndex(contact => contact.num === num)
console.log(index)
console.log(name[0])
//
// name.splice(4, 1, 'faruk');
//
// console.log(name);


// function add(a , b) {
//   var c = a+b;
//   return c;
//
// }
// console.log(add(2,6));

//
// var add = function (a, b) {
//   return a+b;
//
// }
//
//
// console.log(add(6,6));
//
// var total = add;
// console.log(total(9, 8));
//
// const array = ['faisal','mezbah','hasan']
//
// function print(forEach) {
//   for (var i = 0; i < array.length; i++) {
//     forEach(array[i],i)
//   }
// }
//
// print(function(value,index){
//   console.log(value,index);
// })
// function operation(a,b,callback){
//   var c = a+b;
//   var d = a-b;
//   return callback(c,d);
// }
//
// function print(c, d) {
//   var divide = c/d;
//   return divide
// }
//
// function multiply(c,d){
//   var multiply = c*d;
//   return multiply;
// }
//
//
// console.log(operation(15,5 ,print));
// console.log(operation(50,5,multiply));
//
// var name = ['hasan', 'hriso', 'fadfdf', 'ffdfd',]
//
// function traverse(name,callback) {
//     for (var i = 0; i < name.length; i++) {
//      callback(name[i])
//     }



// }
//
// console.log(traverse(name,function(value){
//   console.log(  'Welcome '+value);
// }));
//
//
//
// var people= {}
//
// people.name= 'zishan'
// people.age= 33;
// people.print = function () {
//   console.log(this.name + " " + this.age);
//
// }
//
// people.print()
//
// var data = {
//     name: 'zishan',
//     age: 22,
//     study: 'diploma',
//     print: function () {
//           console.log(this.name + ' '+ this.age + ' '+ this.study);
//     }
// }
//
//
// data.print();


// var name = ['zishan', 'hasan', 'faisal', 'riyad', 'mezgah' ]


// function forEach(callback) {
//     for (var i = 0; i < name.length; i++) {
//       callback (name[i]);
//     }
// }

// forEach(function (value) {
//   console.log(`Hello ${value}`);

// })


// forEach((name, i) => {

//   console.log(`Welcome ${name}`);

// });
