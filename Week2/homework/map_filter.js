'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
const oddNumbers = numbers.filter(x => x % 2 !== 0);
const doubleNumbers = oddNumbers.map(x => { if (x % 2 !== 0) return x * 2 });

console.log(oddNumbers); //==>[1, 3]
<<<<<<< HEAD
console.log(doubleNumbers);//==> [2,6]
=======
console.log(doubleNumbers);//==> [2,6]
>>>>>>> f6d1acc7b0ab9c3a3f3c27687df766257317bf60
