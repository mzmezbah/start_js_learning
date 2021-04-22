// object means in programming that when somthing have a lot of
// property then its can call an object...


// when we use a function within object then its called a method..

// in js obj  property name is calll key & property valu is calle value..

//in js obj , we can push any data put inside of the object..like
          // objName.key = value;
          // objName['key'] = value;
//
// here for looop works differentlly,like under..props means property and
// other is like the under looop...




var book = {
    name: 'vocabulary',
    page: 334,
    author: 'saifurs',
    price : '$56',
    about: 'learning_english'
}

book.publishedDate = "20th january 2015"
book.print= function () {
      return this.name+ '  ' + this.price+'  '+  this.about
}
// console.log(book.print());

for(var props in book){
    console.log('property is = '+ props+ ', ' + "property data: "+ book[props]);
}
