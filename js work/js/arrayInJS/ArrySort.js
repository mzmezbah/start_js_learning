
var data = [
  {id:1, name:'mezbah uddin', age:18,  roll:382362,  email:'mdmezbahfeni@gmail.com'},
  {id:2, name:'mz mezbah', age:22,  roll:82352,  email:'mdmezbahfeni@gmail.com'},
  {id:4, name:'zishan', age:17, roll:382362,  email:'mdmezbahfeni@gmail.com'},
  {id:3, name:'faisal fci', age:17.5,  roll:382362,  email:'mdmezbahfeni@gmail.com'},
  {id:8, name:'zamshed alam', age:19,  roll:382362,  email:'mdmezbahfeni@gmail.com'},
  {id:6, name:'moslah uddin', age:16,  roll:382362,  email:'mdmezbahfeni@gmail.com'},
  {id:5, name:'karim uddin', age:22,  roll:382362,  email:'mdmezbahfeni@gmail.com'},
  {id:7, name:'zohir uddin', age:32,  roll:382362,  email:'mdmezbahfeni@gmail.com'}
]


 var sortedArryById = data.sort(function (a,b) {
  return a.id > b.id;
})

var srotedArryByIdHA = data.sort(function (a,b) {
  return b.id > a.id;
})

var sortedArryByName = data.sort(function (a,b) {
  if (a.name > b.name) {
      return 1
  }else if (a.name < b.name) {
    return -1;
  }else {
    return 0;
  }

})

var sortedArryByAge = data.sort(function (a,b) {
  return a.age - b.age;

})
console.log(sortedArryByAge)
