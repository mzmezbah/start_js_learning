// In js arry, find method works like loop..But the problem is we only found a singel data because in loop when it got its condition then in time this find method close the loop...then return the answer...
//
// In find method, it took a callback function & then we pass argument . then return our condition then we can find our answe likee under function...


var fruitArr = []

function Fruits(name,price,quantity,isAvilable) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.isAvilable = isAvilable;
    fruitArr.push(this)
}

// Fruits.prototype.pusher = function(){
//   fruitArr.push(this)
// }

// function Custom(name,price,quantity,isAvilable) {
//   const obj = new Fruits(name,price,quantity,isAvilable)
//   fruitArr.push(obj)
//   return obj
// }

// var mango = Custom('mango', '$2', '1kg','yes')
// var orange = Custom('orange', '$1.4','1kg', 'yes' )
// var pineapple = Custom('pineapple', '$.8','1kg', 'no' )
// var apple = Custom('apple', '$1','1kg', 'yes' )
// var graps = Custom('graps', '$3','1kg', 'yes' )
// var strawberry = Custom('strawberry', '$6', '1kg', 'no')


var mango = new Fruits('mango', '$2', '1kg','yes')
var orange = new Fruits('orange', '$1.4','1kg', 'yes' )
var pineapple = new Fruits('pineapple', '$.8','1kg', 'no' )
var apple = new Fruits('apple', '$1','1kg', 'yes' )
var graps = new Fruits('graps', '$3','1kg', 'yes' )
var strawberry = new Fruits('strawberry', '$6', '1kg', 'no')

// var getFruitDatailByAvilable=function (isAvilable) {
//   return  fruitArr.find(function (obj) {
//         return obj.isAvilable === isAvilable
//   })
// }
var getFruitDatailByAvilable=fruitArr.find(function (obj) {
      return obj.isAvilable === 'no'
})

console.log(getFruitDatailByAvilable);
