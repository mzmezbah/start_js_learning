// in this sort it tooks a callback fun and here we need to pass 2 aarg.then
// if we sort our data by any num then we can return our condition like under then
// and if we can sort our data by any string like name then we can return ; the condition
// like under...

var num= [33,44,11,3,66,36,7,64]

num.sort(function (a,b) {
    return a-b;
})
console.log(num);


num.sort(function (a,b) {
    return b-a;
})
console.log(num);


var data = [
  {id:1, name: 'mezbah', age: 22, profession: 'study'},
  {id:2, name: 'zishan', age: 21, profession: 'study'},
  {id:3, name: 'foisal', age: 22, profession: "programer" },
  {id:4, name: 'jahid', age: 23, profession: 'unemployed'},
  {id: 5, name: 'jamshed', age:24, profession: 'study'}

]

data.sort(function(a,b) {
    return a.age-b.age;
})
// console.log(data);



data.sort(function (a,b) {
    return a.id-b.id;
})
// console.log(data);


data.sort(function (a,b) {
    if (a.name>b.name) {
      return 1;

    }else if (a.name<b.name) {
      return -1;
    }else {
      return 0;
    }
})
console.log(data);

data.sort(function (a,b) {
    if (a.profession>b.profession) {
      return 1;
    }else if (a.profession<b.profession) {
      return -1;
    }else {
      return 0;
    }
})

// console.log(data);
