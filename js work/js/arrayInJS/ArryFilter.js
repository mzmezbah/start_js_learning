// var ArryNum = [ 34, 55, 54, 65, 45, 78, 90, 880, 455,44]
//
//
//
// var FilterArry = ArryNum.filter(function (a) {
//   return a%2 == 1;
//
// })
// console.log(FilterArry);






var data = [
   {id:1, name:'mezbah uddin', age:18,  roll:382362,  email:'mdmezbahfeni@gmail.com', IsReal:true},
   {id:2, name:'mz mezbah', age:22,  roll:82352,  email:'mdmezbahfeni@gmail.com', IsReal:false},
   {id:4, name:'mezbah zishan', age:17, roll:382362,  email:'mdmezbahfeni@gmail.com', IsReal:false},
   {id:3, name:'faisal fci', age:17.5,  roll:382362,  email:'mdmezbahfeni@gmail.com', IsReal:true},
   {id:8, name:'zamshed alam', age:19,  roll:382362,  email:'mdmezbahfeni@gmail.com', IsReal:true},
   {id:6, name:'moslah uddin', age:16,  roll:382362,  email:'mdmezbahfeni@gmail.com', IsRealS:false},
   {id:5, name:'karim uddin', age:22,  roll:382362,  email:'mdmezbahfeni@gmail.com', IsReal:true},
   {id:7, name:'zohir uddin', age:32,  roll:382362,  email:'mdmezbahfeni@gmail.com', IsReal:false}
]

// var getDataByAge = function (age) {
//   return data.filter(function (a) {
//     return a.age == age;
//
//   })
//
//
// }
// console.log(getDataByAge(17))

 // var getDataByBoolean  = function (IsReal) {
 //   return data.filter(function (a) {
 //     return a.IsReal == true ;
 //
 //
 //   })
 //
 // }
 // console.log(getDataByBoolean(data));




function myFilter(array, callback) {
  var storeData = [];
  for (var i = 0; i <array.length; i++) {
  if (callback(array[i])) {
    storeData.push(array[i])

  }
  }
  return storeData;

}
console.log(myFilter(data, function (x) {
  return x.age >= 18;

}));
