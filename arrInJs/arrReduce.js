// what is reduce is actually done?
// => reduce is look like a loop but it can take a cbfn as an arg & this cbfn also can take 2 param - 1st is accumulator & we can set the value of accumulator as 2nd param of the reduce mehtod arg like the 2nd expmle in here otherwise it can take first element of array as its default value & the 2nd param of cbfn can accept the first element of arry as a value  if we initialize value of accumulator otherwise it takes 2nd element of array as a default value....syntx is
// here...

//you can also findout array index , value of array as pass the 3rd and 4th param of the reduce method...

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
