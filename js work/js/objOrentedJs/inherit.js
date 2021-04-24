// In object_orented js, INHERITENCE means we can share one obj data another obj as a reference.
// In prototype data, we can share it in two types.



function Person(name, department, id) {
  this.id = id;
  this.name = name;
  this.dept = department;

}

var std_info = new Person('mezbah', 'TCT', 1666);

// console.log(std_info);

Person.prototype.print = function () {

  console.log(`name: ${this.name}  department: ${this.dept}`);

}
// console.log(std_info.print());

function Search() {
  Person.call(this, 'mz', 'tct', 55)

}

Search.prototype = Object.create(Person.prototype);

// Search.prototype = Object.create(Person.prototype);     type.1(it is more used than type 2, bcz its performance s high)
// Object.setPrototypeOf(Search.prototype, Person.prototype);     type.2

 Search.prototype.constructor = Search;



var Search_info = new Search();

console.log(Search_info.print);
