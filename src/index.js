import 'babel-polyfill';
import './index.css'
import './2.png'
const add = (x, y) => {
  return new Promise((resolve, reject) => {
    resolve( x + y);
  });
}

add(1, 2).then(res => console.log(res));
