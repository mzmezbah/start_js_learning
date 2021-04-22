// in js object, we cannot use 'this' keyword in without
// any object..we can use it only method & object...
//
// if we need to use it in any function or another ,then we need
// use the bind method...
// For use this, we give the function or other thing name &
// then '.' dot then call write 'bind' then give '()' .After call
// need to give the obj name which oobj u need to import..
//
// syntx ----   funName.bind(objName)

function student(id,name,classes, roll,section,){
    this.id = id;
    this.name=name;
    this.classes= classes;
    this.roll= roll;
    this.section=section;
}

var St1 = new student(1,'oshan',9,3,'A')

console.log(St1);


function data() {
  return this.name+" " + this.classes+ ' ' +this.roll;
};

var data = data.bind(St1);

console.log(data());
