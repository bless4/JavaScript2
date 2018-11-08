'use strict';

// a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let x = '';
  if (num < 0) {
    return x;
  }
  else {
    for (let i = 0; i < num; i++) {
      x += str
    }
  }
  str = x
  return str;
}




console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let x = '';
  while (num > 0) {
    x += str;
    num--;
  }
  str = x
  return str;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let x = '';
  do {
    if (num < 0) {
      return x;
    }
    x += str;
    num--;

  } while (num > 0);

  str = x;
  return str;
}

console.log('do...while', repeatStringNumTimesWithDoWhile('abc', 3));