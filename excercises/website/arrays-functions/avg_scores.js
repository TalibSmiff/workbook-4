"use strict";
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let total = 0;

  for (let index = 0; index < scores.length; index++) {
    const score = scores[index];
    total += score;
  }
  let average = total / scores.length;
  return average; 
}
let myAverage = getAverage(myScores);
let yourAverage = getAverage(yourScores);

console.log(`my average score was : ${myAverage.toFixed(2)}`)
console.log(`your average score was : ${yourAverage.toFixed(2)}`)