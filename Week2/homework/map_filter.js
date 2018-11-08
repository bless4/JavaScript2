'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
const oddNumbers = numbers.filter(x => x % 2 !== 0);
const doubleNumbers = oddNumbers.map(x => { if (x % 2 !== 0) return x * 2 });

console.log(oddNumbers); //==>[1, 3]
console.log(doubleNumbers);//==> [2,6]