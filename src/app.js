//Only use the below import in case of useBuiltIns option set to 'entry'
//import "@babel/polyfill";
import math from './math.js'
import string from './string.js'

window.onload = () => {
  console.log(math.sumAll(50, 10));
  console.log(math.subtractAll(50, 10));
  console.log(math.multiplyAll(50, 10));
  console.log(math.divideAll(50, 2));
  const cS =string.concatenateStrings('Ajay', 'Sankar', 'Chintagunta');
  console.log(cS);
  const ele = document.getElementById('concatenate');
  if(ele) {
    ele.innerText = cS;
  }
  let iterable = [10, 20, 30];
  for (let value of iterable) {
    value += 1;
    console.log(value);
  }
  const foo = { a: 'foo', z: 'bar', m: 'baz' };
  for (let i of Object.keys(foo)) {
    console.log('Hello world');
  }

  const p = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('Timer Expired Ajay Sankar');
    }, 3000);
  })

  p.then((value) => {
    window.alert(value);
  }, (error) => {
    window.alert(error);
  })
}