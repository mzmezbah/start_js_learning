var arr = [3, 34, 5, 33, 66, 77,8]


//  var newArr = [];
//
//  for(var i=0; i<arr.length; i++){
//    newArr.push(arr[i] +3);
//  }
// console.log(newArr)


// var newArr = arr.map(function (data) {
//   return data + 3;
//
// })
// console.log(newArr);


function myMap(arr, callback) {
  var newArr = [];
  for(var i = 0; i<arr.length; i++){
    newArr.push(callback(arr[i]));
  }
  return newArr;
}




console.log(myMap(arr, function (data) {
  return data * 3}) )
