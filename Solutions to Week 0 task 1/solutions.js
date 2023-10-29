// # Challenge 1

// Implement a JavaScript function to count the occurrences of a specific character in a string.

// # Example

// countCharOccurrences("hello", "l") should return 2.
// countCharOccurrences("banana", "a") should return 3.
// countCharOccurrences("racecar", "z") should return 0.

function countCharOccurrences(str, char) {
  let numberOfOccurrence = 0;

  for (let i = 0; 1 < str.length; i++) {
    if (char == str[i]) {
      numberOfOccurrence++;
    }
  }
  return numberOfOccurrence;
}
// # Challenge 2

// Implement a function that checks if a given number is positive, negative, or zero and returns a corresponding string.

// # Example

// checkNumber(5) should return "Positive".
// checkNumber(-3) should return "Negative".
// checkNumber(0) should return "Zero".

function checkNumber(valueNumber) {
  if (valueNumber > 0) {
    return "Postive";
  } else if (valueNumber < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
// console.log(checkNumber(-67));

// # Challenge 3

// Implement a function that checks if a given year is a leap year and returns a boolean.

// # Example

// isLeapYear(2020) should return true.
// isLeapYear(2021) should return false.
// isLeapYear(2000) should return true.

function isLeapYear(year) {
  if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(isLeapYear(2020));

// # Challenge 4

// Implement a function that takes three numbers as arguments and returns the smallest one.

// # Example

// findSmallest(10, 5, 8) should return 5.
// findSmallest(-3, -1, 0) should return -3.
// findSmallest(7, 7, 7) should return 7.

function findSmallest(firstNumber, secondNumber, thirdNumber) {
  if ((secondNumber && thirdNumber) > firstNumber) {
    return firstNumber;
  } else if ((firstNumber && thirdNumber) > secondNumber) {
    return secondNumber;
  } else {
    return thirdNumber;
  }
}
// console.log(findSmallest(10,5,8));

// # Challenge 5

// Implement a function that classifies a temperature as "Freezing ( below 0) ," "Cold (between 0 and 10)," "Mild (between 10 and 20)," "Warm (between 20 and 30)," or "Hot (above 30)" based on a given temperature value.

// # Example

// classifyTemperature(0) should return "Freezing"
// classifyTemperature(7) should return "Cold".
// classifyTemperature(12) should return "Mild".
// classifyTemperature(23) should return "Warm"
// classifyTemperature(83) should return "Hot"

function classifyTemperature(temperature) {
  if (temperature <= 0) {
    return "Freezing";
  } else if (temperature > 0 && temperature <= 10) {
    return "Cold";
  } else if (temperature >= 10 && temperature <= 20) {
    return "Mild";
  } else if (temperature >= 20 && temperature <= 30) {
    return "Warm";
  } else if (temperature > 30) {
    return "Hot";
  }
}
// console.log(clasifyTemperature(0));

// # Challenge 6

// Implement a function fizzBuzz(input) that takes a number and retuns:
// "fizz": if the number is divisible by 3
// "buzz": if the number is divisible by 5
// "fizzbuzz": if the number is both divisible by 3 and 5
// number: if it is not divisible by 3 or 5

// # Example

//     fizzBuzz(3) to return "fizz"
//     fizzBuzz(5) to return "buzz"
//     fizzBuzz(15) to return "fizz"
//     fizzBuzz(7) to return 7

function fizzBuzz(fizzNumber) {
  if (fizzNumber % 3 == 0 && fizzNumber % 5 == 0) {
    return "fizzbuzz";
  } else if (fizzNumber % 5 == 0) {
    return "buzz";
  } else if (fizzNumber % 3 == 0) {
    return "fizz";
  } else if (fizzNumber % 3 != 0 && fizzNumber % 5 != 0) {
    return fizzNumber;
  }
}
// console.log(fizzBuzz(45));
