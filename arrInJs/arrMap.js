// what is map?

// map is as the same of foreach ,just the difference is map is return a new arry....
// syntx is-- here,

var arr = [4,5,6,6,3,9,53,63,63,664,64,364]

//
// function map(arr,clb) {
//   var newArr= [];
//   for (var i = 0; i < arr.length; i++) {
//     if (clb(arr[i],i , arr)) {
//       newArr.push(clb(arr[i], i,arr))
//     }
//   }
//   return newArr;
// }
//
//
// var myMap = map(arr,function (value,i,arr) {
//     return value -3+ " "  +'my index: ' + i+ ' main arry: ' + arr;
// })
//
// console.log(myMap);


var newArr= arr.map(function (value ,i , arr) {
      return  value-3 + ' '+ 'index is: '+ i+ ' '+ 'origin arry: ' + arr ;
})

console.log(newArr);
