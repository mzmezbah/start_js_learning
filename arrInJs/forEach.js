 var arry = [3,5,33,6,25,66,3]
 //
 // arry.forEach(function (num) {
 //    console.log('element is -' + num);
 // })

function loop(num,clb) {
    for (var i = 0; i < num.length; i++) {
      console.log(clb( num[i],i));
    }
}

loop(arry,function (b,i) {
  return 'num-' + b+' ' + 'index-' + i
})

console.log();
