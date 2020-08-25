
export function strReverse(str = '') {
  return str.split('').reverse().join('');
}


export function randomNum(len = 10, max = 10, min = 0) {
  return new Array(len).map(em => parseInt(Math.ramdom() * (max - min) + min));
}


export function jieliu(fn, time) {
  let timer = null;

  return function(...rest) {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...rest);
        clearTimeout(timer);
        timer = null;
      }, 100);
    }

  }
}
