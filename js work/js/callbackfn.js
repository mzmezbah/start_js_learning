//
//   function add(a,b, callback) {
//     var c = a+b;
//     var d = a-b;
//     callback(c,d);
//   }
//
//
//   function print(c,d) {
//     console.log(c,d);
//
//   }
//
// function multipier(c,d) {
//   console.log('multiply=', + c*d)
//
// }
//   add(45,22, print);
//   add(5,4, multipier);



function X(a,b,callback) {
  var c = a+b;
  var d = a-b;

  callback(c,d);

}

function print(c,d) {
  console.log('add=' + c, 'substructor=' + d);

}

function multiply(c,d) {

  console.log('multiply=' + c*d);

}

function divide(c,d) {
  console.log('divide=' + c/d);

}
X(80,78,print)
X(80,78,multiply)
X(80,78,divide)

                      // XTRA FN

function zx(a,b,c) {
  console.log('1sr argument: ' + a)
  b(a);
  c(a);
}

zx("a ia a parameter , b & c is just a callback fn" , function (a) {
  var a = a.toUpperCase();
  console.log(a);


} , function (a) {
  console.log(a.toLowerCase());

})
