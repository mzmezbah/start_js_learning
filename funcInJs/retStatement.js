// function details(firstname, lastname , gender) {
//       if (gender === 'male') {
//           console.log('Mr ' + firstname +' '+ lastname);
//       }else if (gender === 'female') {
//           console.log('Mrs. ' + firstname + ' '+ lastname);
//       }
// }
//
// details('mezbah','zishan', 'male')
//
// function details(firstname , lastname , gender) {
//
//   if (gender ==='male') {
//         var name = "Mr. "+  firstname+ ' ' + lastname
//   }else if (gender === 'female') {
//         var name = 'Mrs. ' + firstname + ' ' + lastname
//   }
//
//   return name ;
//
// }
//
//
// console.log(details('mz','ziahan', 'male'));
//
//
//
// function example() {
//     return {
//       name: 'mezvah',
//       roll: 382362,
//       print:function () {
//           return 'hello, '+ this.name;
//       }
//     };
// }
//
// // console.log(example);
//
// var obj = example();
// console.log(obj.name);
//
// console.log(obj.print());
//
//
// var arry= [3,4,5,6,7,8,9]
//
//
// function forEach(arry,fun) {
//     for(var i=0; i<arry.length; i++){
//       fun(arry[i])
//     }
// }
//
// forEach(arry,function (v ) {
//       console.log(v+1);
// })
//
//
// var me = {
//   name: 'mezvah',
//   age: 17,
//   email: 'mdmexvah345@gmail.com'
// }
//
//
//
// function printMySelf(myself, clb) {
//     console.log('person: '+ myself.name.toUpperCase() + '('+ myself.age + ')');
//     if (myself.age>=17) {
//         clb(myself.email)
//     }
// }
//
// printMySelf(me,function (email) {
//     console.log('the email is : '+ email.toUpperCase());
// })

//
// function host() {
//       console.log( 'i a host' );
//       return function() {
//           console.log('i am child');
//       }
//
//     };
//
//  host()();

function greetings(msg) {
    return function (name) {
        console.log(msg + ' '+ name);
    };
}

greetings('hello')('nayem');

var hello= greetings('hello');
var good = greetings('good morning');
hello('mezbah')
good('zishan')
