function Cls(a,b) {
  return (a+b)* this.c;

}

var obj =  {
  c: 5
}

var binded = Cls.bind(obj)

console.log('bind_ans: '+ binded(59, 5))

var called = Cls.call(obj, 5, 98)

console.log('call_ans: ' + called);

var applied = Cls.apply(obj, [55,6])

console.log('apply_ans: ' + applied);
