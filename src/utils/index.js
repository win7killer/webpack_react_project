
export function strReverse(str = '') {
  return str.split('').reverse().join('');
}


export function randomNum(len = 10, max = 10, min = 0) {
  return new Array(len).map(em => parseInt(Math.ramdom() * (max - min) + min));
}
