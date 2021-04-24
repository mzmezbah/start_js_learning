
// In js object, there have no class, inheritance, constructor. But we could make class for our neeed. for this, we need to
// create function. In this funtion, we need to pass the obj key as a Fn argument. Then we can use 'this' keyword to define
// the Fn argument as a key of obj. Then we need to  define the Fn name as a obj by using 'new' keyword . we can keep
// data a obj like under obj. By this technique we can make a dynamic objj creative class & use this store data.





function Book(id, name, author, description, price, isPublish) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.description = description;
  this.price = price;
  this.isPublish = isPublish;

}

var book1 = new Book('1', 'mezbah', 'mezbah', 'hlw', 2000, true);
console.log(book1)
