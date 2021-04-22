// what is reduce is acually ddone?
// => reduce is look like a loop ,in here it takes a callback fun & a an agrument & this arg  value is first is arry 1st num then if we declare it then change it..then this callback fn
// take four argument & this 4 value first 1 is reduce methods second arg and onther 3 is arr value and index , arry.syntx is
// here...

 var data = [45,64,66,75,75,34,65,76,3,6,3,53,65,33]

// var result = data.reduce(function (a,b) {
//       return a+b;
// })
// console.log(result);



const fruit = ['apple', 'banana', 'orange', 'pineapple', 'apple', 'orange', 'apple', 'pineapple']

const fruitInfo = fruit.reduce((a,b) => {
  if(b in a){
    a[b]++;
  }else{
    a[b] = 1;
  }
  return a;
},{})


// console.log(fruitInfo);

// concat means 2 arr convert 1 arr;


const arr = [ [3,4,5,5], [9,6,8,6]]



const NewArr = arr.reduce((a, b)=> a.concat(b),[])

console.log(NewArr);
