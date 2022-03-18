// Part3
import myCollection from "./collection.js";

//Part4
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

// 2c.

function describeItem(item) {
  if (item.count === 1){
    console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}`)
  }
  else {
    console.log(`I have ${item.count} ${item.name}. Here's what I like about it: ${item.whatILike}`)
  }
}

// 2d. NOT WORKING
// Now make a function called describeCollection that takes in an array as a parameter.
// The function should loop through the array, and for each item, it should call the describeItem function so it displays a message according to how many you have in your collection.

// function describeCollection (array){
//   for (let i=0; i < array.length; i++){
//       describeItem(array[i]);
//       console.log(describeItem(array[i]));
//   }
// }

// describeCollection(myCollection);

function describeCollection(array){
  return array.forEach(describeItem);
}

describeCollection(myCollection);
