console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log( helloName( 'Dante' ) );


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log( 'the total is:', addNumbers( 4, 32) );


// 4. Function to multiply three numbers & return the result
function multiplyThree( numberOne, numberTwo, numberThree ){
  return numberOne * numberTwo * numberThree;
}
console.log( 'the toal is:', multiplyThree( 3, 6, 9 ) );


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log( 'should say true', isPositive(5) ); //should say true
console.log( 'should say false', isPositive(-5) ); //should say false
console.log( 'should still say false', isPositive(0) ); //should say false

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if( array.length > 0 ) {
    return array[array.length - 1];
  } else {
    return array[array.length - 1];
  }
}
let arrayColors = ['red', 'blue', 'yellow'];
let arrayEmpty = [];

console.log( 'The last item in the array is:', getLast( arrayColors ));
console.log( 'This should say undefined because this array is empty', getLast( arrayEmpty ));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  let matchFound;
  for ( item of array ) {
    if( item === value ) {
      matchFound = true;
      break
    } else {
      matchFound = false;
    }
  }
  console.log( matchFound );
  return matchFound
}
let arrayWithMatches = [3, 4, 5, 6, 7, 8, 9, 10];
let arrayWithoutMatches = ['apple', 'bugs', 'summer', 'sun', 'beaches'];

console.log('this should say true', find( 8, arrayWithMatches ));
console.log('this should say false', find( 'snow', arrayWithMatches ));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let matchFound;
  if(string.charAt(0) === letter) {
    matchFound = true;
  } else {
    matchFound = false;
  }
  return matchFound;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for( number of array ) {
    sum += number;
  }
  return sum;
}
let arrayOfNumbers = [12, 90, 30, 55, 32, 11, 2];
let otherArrayOfNumbers = [33, 11, 22, 44, 55, 90];

console.log( sumAll( arrayOfNumbers ));
console.log( sumAll( otherArrayOfNumbers ));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
