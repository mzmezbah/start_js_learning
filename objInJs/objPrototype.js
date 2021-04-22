// In js, we can use prototype. By using prototype in class, we can share data one object to other..by using it ,we can sort our code and save our storage.Most of the time, we can use it for method...
// prtotype stored in __proto__ / we can see it on browser...
// .syntax is---
      // ClassName.prototype.keyName = value;
      // ClassName.prototype.methodName = function () {

      // };


function mobile(brand,model,price,isAvilable) {
      this.brand = brand;
      this.model = model;
      this.price = price;
      this.isAvilable =isAvilable;
}

mobile.prototype.color = 'blue, black, purple';

mobile.prototype.print = function () {
      console.log(this.model + ' '+ this.price);
};


var samsung = new mobile('samsung','S20 ultra','$433', 'yes')
var huawei = new mobile('huawei','p40 pro', '$556', 'yes')


console.log(samsung);
console.log(huawei);
