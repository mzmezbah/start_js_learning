var books = [
  {id:1, name:'books1', price:290, description:'this is book 1', author:'mezbah', isPublish:true},
  {id:2, name:'books2', price:120, description:'this is book 2', author:'zamshed', isPublish:false},
  {id:3, name:'books3', price:220, description:'this is book 3', author:'faruk', isPublish:true},
  {id:5, name:'books5', price:190, description:'this is book 5', author:'mezbah', isPublish:true},
  {id:4, name:'books4', price:90, description:'this is book 4', author:'mezbah', isPublish:false},
  {id:8, name:'books8', price:320, description:'this is book 8', author:'zamshed', isPublish:true},
  {id:6, name:'books6', price:250, description:'this is book 6', author:'mezbah', isPublish:true},
  {id:7, name:'books7', price:380, description:'this is book 7', author:'faruk', isPublish:false},
  {id:9, name:'books9', price:340, description:'this is book 9', author:'zamshed', isPublish:false}

]


var getAllData = function (books) {
  return books.sort(function (a, b) {
    return a.id - b.id ;

  })

}

var getDataByAuthor = function (author) {
    return books.filter(function (obj) {
      return obj.author === author;
  })

}

var getDataByName = function (name) {
  return books.find(function (obj) {
    return obj.name === name;

  })

}

var getDataById = function (id) {
    return books.find(function (obj) {
      return obj.id === id;

    })
}


console.log(getDataById(9));
