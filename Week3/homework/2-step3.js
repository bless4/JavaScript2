'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  let values = [];
  for (var i = startIndex; i <= stopIndex; i++){
    values.push(i);
  }
}

threeFive(10, 15, sayThree, sayFive);
