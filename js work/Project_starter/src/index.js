// import Student from './person';
// import * as myPromise from './promise.js'
//
// // console.log(myPromise);
// // let p1 = new Person( 1, 'mezbah', 'md.maz.mz@gmail.com');
//
// // const st1 = new Student( 2,'mezbah', 'msefbfg@gmail.com', 4545, 'tct');
// //
// // console.log(st1.print());
// //
// const fruits = ['apple', 'mango', 'banana', 'orange', 'apple', 'graps', 'mango', 'apple', 'banana', 'orange', 'mango', 'graps', 'mango']
//
// const fruitsInfo = fruits.reduce((a,b)=> {
//
//   if (b in a) {
//
//     a[b]++;
//
//   }else {
//     a[b]=1;
//   }
// return a;
// },{})
//
// console.log(fruitsInfo);
//
//
// // let header = document.getElementById('my-h1')
// // header.innerHTML = 'MZ-ZISHAN'
//
// let btn = document.getElementById('btn-id')
//
//
// btn.addEventListener('click', function(){
//   let h1 = document.getElementById('my-h1');
//   let p = document.getElementById('PP');
//   h1.innerHTML = 'Mezbah-Zishan'
//   p.innerHTML = 'I am Mezbah. I am begainer of javascripts programing languages. I try to learn this smoothly.'
// })




fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((body) =>{
      let list = body.map((data) => {
        let li = document.createElement(li)
        let text = `name: ${data.name}; Website: ${data.website};`
        let textNode = document.textNode(text);

        li.appendChild(textNode);

        return li;
      })

        list.forEach((data) => document.getElementById('mylist').appendChild(li))

  })
  .catch((err) =>  console.log(error))
