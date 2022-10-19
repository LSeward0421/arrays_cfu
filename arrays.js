var catNames = ['fernie', 'frodo', 'phillip', 'frankie'];
var ages = [1, 2, 3, 4];
var areTheyHappy = [true, false, true, true]

// Utilizing pop() method will print out ['fernie', 'frodo', 'phillip']
catNames.pop();
console.log(catNames);
// Utilizing push() will add additonal element 5 to end of array
ages.push(5);
console.log(ages);
// Utilizing unshift method will add an element to beginning of array
areTheyHappy.unshift(true);
console.log(areTheyHappy);

/* Index positions are used to indicate the position of an element within an array. Most languages start from position '0' and then proceed by 1 for each element. 
*/
console.log(catNames[2]);
// output will be 'Phillip' which is index position 2
