let count = 1;
let condition = true; 
do {
  console.log(`${count} bottles of birch beer on the wall`);
  count++;
  condition = count < 100
} while (condition);
