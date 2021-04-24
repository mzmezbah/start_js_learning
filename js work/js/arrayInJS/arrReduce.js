var arr = [23, 34, 55, 3, 66, 35, 67, 99]


// var sum = 0;
//
// for (var i = 0; i <arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum);

var sum = arr.reduce(function (a, b) {
  return a+b;

})
console.log(sum);
