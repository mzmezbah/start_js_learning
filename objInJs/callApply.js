// call & apply are as same as bind method.but only one diffence bind & call,apply that is bind method create a new function & it again need to call or console..but call & apply are not need to call or console again..
//
// but when we need to pass argument then 3 are same but apply is little bit diffence like under...
// //
var employee = {
  id: 1,
  name:'abc',
  shift: 'morning',
  salary: '$200'
}


function emp(){
    console.log(this.name +' '+ this.salary);
}


 var newEmp = emp.bind(employee);
console.log(newEmp());

emp.call(employee)
emp.apply(employee)


function method(a,b){
  return this.c*(a-b);
}

var obj = {
  c:5
}

var newMethod= method.bind(obj,10,35)
console.log(newMethod());



 var newMethod = method.call(obj,59,50)
console.log(newMethod);


var newMethod= method.apply(obj,[5,3])
console.log(newMethod);
