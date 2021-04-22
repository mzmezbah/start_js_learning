function base(b) {
  return function (n) {

    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;

  }
  return result;

}
}


var power = base(2)
var ans = power(5)

console.log(ans);


var result = base(3)(4);

console.log(result);
