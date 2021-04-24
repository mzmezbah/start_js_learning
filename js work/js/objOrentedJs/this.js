// In js, this keyword just work in under the obj..Otherwise it does not work...

// var Data = {
//   name: 'mezbah',
//   vill: 'nichinta',
//   up: 'chhagalniya',
//
//   print: function () {
//     // console.log('name = ' + this.name  + ' village = ' + this.vill)
//     console.log(this);
//   }
// }
//
//
// console.log(Data.name);
// console.log(Data.print());


//
// var Person = {
//   name: 'mezbah',
//
//   print: function () {
//   console.log('name = ' + this.name);
//
//   }
// }




// var myPerson = Person.print;   //(in this, var myPerson =  function () {
//                                  // console.log('name = ' + this.name);
//
//                                      // }
//                                 //    in this variable person.print is jsut like a function. it not under the
//                                  // obj,, for this cause 'this' keyword  does not work..
//
//                                  // for this we need to add this functiion in a obj.for this,
//                                  // we need to  use 'bind' method..In bind method, frist u need to
                                      //   give the using function nme then use dot the write bind then give obj name in
                                      // parenthesis;)
// console.log(myPerson())


// var myperson = Person.print.bind(Person);
// console.log(myperson());
//
//
// function add(num) {
//   return this.value + num;
//
// }
// var obj = {
//   value:50
// }
//
// var binded = add.bind(obj)
// console.log(binded(39));





    // "this obj print 'this' keyword not work"
    // bcz the Fn of setTimeout is  not directly under the obj,
    // its under the setTimeout.bcz of this it does not works.



// var Data = {
//   name: 'mezbah',
//   print: function () {
//     setTimeout(function () {
//       console.log('name = ' + this.name)
//
//     }, 2)
//
//   }
// }
// console.log(Data.print());




        // "it is worked for removing 'this' keyword"
        // here name is a variable


// var Data = {
//   name: 'mezbah',
//   print: function () {
//     var name = this.name;
//     setTimeout(function () {
//       console.log('name = ' + name)
//
//     }, 2)
//
//   }
// }
//
// console.log(Data.print());



  // It is worked bcz we use here 'bind' method
  // in the callback Fn of setTimeout.

//
// var Data = {
//   name: 'mezbah',
//   print: function () {
//     // var name = this.name;
//     setTimeout(function () {
//       console.log('name = ' + this.name)             //here 'setTimeout' use for after how much time output
//                                                       // show.....4000 means 4 sesceond.....
// }.bind(Data), 4000)
//
//   }
// }
//
// console.log(Data.print());


var Person = {
  name: 'mezbah'
}


Person.print = function () {

setTimeout(function () {

  console.log(`name: ${this.name}`);

}.bind(Person), 5000)
}


Person.print()
