// in this filter fun ,we can filter any arry data. for this, it return a
// new arry with new data..because of this we need to keep the filter fun
// in variable...
// in this filter , it took a callback fun & it took can took a 3 arg & 1st is
// for  value 2nd is for index num & 3rd is for consloe full arry...as usually
// we need the value, for this we pass a argument in clb fun...thn return our
// condition...then we consloe the new arr then it give us result..

var data = [
  {id:1, name: 'mezbah', roll:33, dept:'tct', profression:'study'},
  {id:2, name: 'zishan', roll:44, dept: 'cse', profression: 'study'},
  {id:3, name: 'faisal', roll:34, dept: 'tct', profression: 'programmer'},
  {id:4 , name: 'riyad', roll: 2, dept: 'dnt', profression: 'job_holder'},
  {id:5 , name: 'jibon', roll:6, dept: 'cse', profression:'inrenship'}
]
//
// var data = [33,55,66,45,22,46,64,73,5,3,6,7,344]
//
// function filter(num,clb) {
//     for (var i = 0; i < num.length; i++) {
//     clb(num[i])
//     }
// }
//
//
// filter(data,function (a) {
//     if (a%2 ==  1) {
//         console.log('odd num of this array :  ' + a);
//     }
//
// })

//

// var getDataById = function (id) {
//     return data.find(function (data) {
//       return data.id === id;
//
//     })
// }
//
// //
// console.log(getDataById(3));
// var getAllDataByDept = function (dept) {
//   return data.filter(function (data) {
//         return data.dept == dept;
//
// }
// )}
//
//
// console.log(getAllDataByDept('tct'));
//
// var getAllDataByDept = data.filter(function (value) {
//       return value.dept == 'tct';
//
// }
// )
//
// console.log(getAllDataByDept);



//
// function filter(data,clb) {
//   var newData = [];
//   for (var i = 0; i < data.length; i++) {
//     if (clb(data[i])) {
//       newData.push(data[i])
//     }
//   }
//   return newData;
// }
//
// var myFilter = filter(data,function (value) {
//     return value.dept == 'tct';
// })
//
//
// console.log(myFilter);



// function filter(data,clb) {
//     var newData= [];
//     for (var i = 0; i < data.length; i++) {
//       if (clb(data[i])) {
//         newData.push(data[i])
//       }
//     }
//     return newData;
// }

// var newArr = filter(data,function (value) {
//     return value.profression === 'study';
// })


// console.log(newArr);


let getContactById  = (id)=> {
  return data.find(contact => contact.id === id)
 }


 console.log(
  getContactById(1))