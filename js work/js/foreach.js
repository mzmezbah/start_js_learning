var num = [2,34,12,33,67,97,22,55,66,98,90];

// num.forEach(function (data,index,arry) {
//
// console.log('data is = ' + data + ' index num = '+ index + ' arry is = ' + arry)
//
// })

// By using forEach in arry, we can find out  three different type  of data. 1.all element traverse
//  2.all element index number.
// for this we need to use a callback function. in this function we had to pass three argument.
//  first work to traverse the element, seceond works to show the index num,
//   third works to show the all data arry or full arry.
// then we need to give our condition in the scope. after all we can find out our result.
//
// //
// function loof(element, callback) {
//   for (var i = 0; i < num.length; i++) {
//   callback (num[i],i,num);
//   }
//
// }
// loof(num, function (a,i,arry) {
//    console.log('element is = ' + a + ' index =' + i +' arry = ' + arry)
//  })


// var ArryOfOdd = []
// var ArryOfEven = []
//
// for (var i = 0; i < num.length; i++) {
// if (num[i]%2 ==1){
//   ArryOfOdd.push(num[i]);
// }else {
//   ArryOfEven.push(num[i]);
// }
//
// }
// console.log('EvenNum = ' + ArryOfEven)
// console.log('OddNum = ' + ArryOfOdd)




var ArryOfOdd = []
var ArryOfEven = []

num.forEach(function (a) {
  if(a%2 == 1) {
    ArryOfOdd.push(a);

  }else {
      ArryOfEven.push(a);
  }

})
console.log('EvenNum = ' + ArryOfEven)
console.log('OddNum = ' + ArryOfOdd)
