// In js obj, there is no class.but we can make class for our need..
// when we work a huage object ,we cannot write it one by one. For this
// shortcut we make a class.

// for this we need to take a fun. then we pass the object key as arg in the
// funct. then we use this keyword ,here this mean the funct name & we give the condition this.key..like under functiion..

// here we need to took our new object name as a variable & then pass our object value in the function...
//
// we must use the 'new' keyword..othewise it doesnot work..because it return
// a new object..then this funct become an object..


// here this for loof we can traverse our object & show any data that we need.
// here props means key of this object.

// this function is also called a constrauctor pattern or function..


function  book(id,name,page,price,description,publishDate,author) {
          this.id = id;
          this.name = name;
          this.page = page;
          this.price = price;
          this.description = description;
          this.publishDate = publishDate;
          this.author = author;
}

var book1 = new book(1,'tara tin jon', 230,  '$45', 'about life', '20th june 14', 'humayun ahmed')

var book2 = new book(2,'paradoxical sazid', 230,'$33','islamic', 'june 2019', 'arif azad')


console.log(book1);
console.log(book2);

// for(var props in book1){
//     console.log(props);
// }
