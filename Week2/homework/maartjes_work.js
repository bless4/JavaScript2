//2.1

//2.2
'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Add your code here
//console.log(tasks);

<<<<<<< HEAD
// convert Maarje working mins into hours then into salary for Mon-Tuesday
=======
// convert Maarje's working mins into hours then into salary for Mon-Tuesday
>>>>>>> f6d1acc7b0ab9c3a3f3c27687df766257317bf60
const salary = tasks.map(lengths => { return lengths.duration })
  .map(hours => hours / 60)
  .filter(long => long >= 2)
  .map(rate => rate * 25)
  .map(euro => { return euro.toFixed(2) })
  .reduce((accumulator, wage) => { return accumulator + wage; 0 });

<<<<<<< HEAD
console.log('Maartje\'s salary for Monday and Tuesday is ' + '€' + salary);
=======
console.log('Maartje\'s salary for Monday and Tuesday is ' + '€' + salary);
>>>>>>> f6d1acc7b0ab9c3a3f3c27687df766257317bf60
