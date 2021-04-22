// var inn;
//
//  function outer() {
//     function inner() {
//       return  'i am inner function';
//     }
//     inn = inner();
//     console.log('i am outer function');
//  }
//
//
// // outer();
// outer();
// console.log(inn);


function add(a,b) {

    function sum() {
          return a+b;
    }

    function sub() {
        return a-b;
    }

    function div() {
        return a/b;
    }

    function multi() {

      return a*b;
    }
    return sum() + sub() + div() + multi();
}

var result = add(5,6)
console.log(result);
