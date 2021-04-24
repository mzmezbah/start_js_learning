export let myPromise = new Promise((resolve, reject)=>{

    let name = 'MZ Zishan'

    resolve(name)
})

myPromise
        .then((name)=>{
          console.log(`myNameIs: ${name}`)
          });
          // .catch((err)=>{});
