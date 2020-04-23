'use strict'

const fibonacci = () => {
  let arr = [0, 1];
  for (let i = 2; i < 14 + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr;
}

const isFibonnaci = (num) => {
  return fibonacci().includes(num);
}

module.exports = {
  fibonacci,
  isFibonnaci
}
