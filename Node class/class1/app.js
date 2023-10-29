
// let year = 1990;

// if (year >= 1901 && year <= 2000) {
//     console.log("Year is in the 20th century")
// } else{
//     console.log("Year is not in the 20th Century")
// }

// let year = 2003;

// if (year >= 1801 && year <= 1900) {
//     console.log("Year is in the 19th century");
// } else if (year >= 1901 && year <= 2000) {
//     console.log("Year is not in the 20th Century")
// } else if (year >= 2001 && year <= 2100) {
//     console.log("Year is not in the 21th Century") 
// } else {
//     console.log("Year is not in the 19th, 20th or 21st Century");

// }

// function centuryForEachYear(year) {
//     let roundedYears = year/100;
//     if (year % 100 === 0) {
//         return(roundedYears);
//     } else {
//         return ((year - (year % 100))/100) + 1;
//     }
// }
// console.log(centuryForEachYear(1999));

// // given a year, calculate the age a person would be in 2037 

// function Age(year) {
//     return 2037 - year;
// }
// console.log(Age(2000));

// function calculateBMI(massOne, massTwo, heightOne, heightTwo) {
//     let bmiOne = (massOne / (heightOne * heightOne));
//     let bmiTwo = (massTwo / (heightTwo * heightTwo));
//     let bmi = (bmiOne && bmiTwo);
//     return bmi;
// }
// console.log(calculateBMI(5,4,6,7));

// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// function calculateBMI(massForStudent, heightForStudent) {
//     const solutionForBMI = ( massForStudent / (heightForStudent * heightForStudent));
//     return solutionForBMI;
// }
// //for the BMI for John
// console.log("The BMI of the student is " + solutionForBMI);

// console.log("John's BMI is " + BMIJohn);

// introduction = `My name is Faith and i'm ${2023 - 2013} years old`

// let currentYear = 2023;
// let birthYear = 2013;

// introduction = `My name is Faith and i'm ${currentYear - birthYear} years old`

// console.log(introduction)

// let firstName = `Epretari`;

// function test () {
//     let firstName = `Faith`;
//     console.log(firstName);
// }
// console.log(firstName)
// test()
// var firstName = `Nathaniel`;
// firstName = `Joe`;

// console.log (firstName);

// let lastName = `Jonah`;
// const petName

// firstName = `David`
// lastName = `Joseph`

// types of scopes in javascript
// * function scope, block scope & global scope 



// console.log(firstName, lastName);
// console.log(typeof firstName);

// num1 = 10;
// num2 = 35;

// num3 = num1 + num2
// num4 = num2 * num2
// num5 = num2 / num1
// num6 = num1 - num2
// num7 = num2 % num2;
// console.log(num3, num4, num5, num6);

// let stringNum = "toDTy";

// console.log(stringNum.length);

// function middleString(string) {
//     // let n = string.length
//     // let b = n - 1
//     // return string.slice(1,b)
//     return string.slice(1,-1) 
// }
// console.log (middleString("Epretari"));


// console.log(stringNum.slice(0,1));
// console.log(stringNum.slice(4,5));
// console.log(stringNum.slice(1, 3));
// console.log(stringNum.slice(3, 5));
// console.log(stringNum.slice(1, 5));

// console.log(stringNum.substring(2,5));
// console.log(stringNum.substr(3,5));

// console.log(stringNum.toUpperCase());
// console.log(stringNum.toLowerCase());

// console.log(stringNum.trim());
// console.log(stringNum.trimStart());
// console.log(stringNum.trimEnd());

// let num1 = "090280" 
// let value = "Hello, World"

// console.log(num1.padStart(11, "x"));
// console.log(num1.padEnd(11, "x"));

// num1.charAt(postion)
// console.log(num1.charAt(1));
// console.log(num1.charCodeAt(3));

// console.log(0.1+0.2);
// console.log(0.2 * 10);
// console.log(((.1*10) + (.2*10))/10);

// let num1 = "20"
// let num2 = "a"
// num3 = num1 / num2

// // console.log(num1 + num2);
// // console.log(num1 * num2);
// // console.log(num1 - num2);
// // console.log(num1 / num2);
// console.log(typeof num3);

// first century:  1 - 100
// second century: 101 - 200

// function centuryName(year) {
//     if (year % 100 == 0) {
//         return year / 100;
//     }
// }
// console.log(centuryName(1601));

//Mat.sqrt(): to get the square root of a number
// console.log(Math.sqrt(49));

// const num1 = 7 + 7n;

// const firstName = "Nathaniel";
// const lastName = "Doe";
// const Age = 20;
// const birthYear = 1998;
// const isStudent = true;

// console.log(typeof (20n));

//Array

// const nathanielData = ['Nathaniel', "Doe", 20, 1998, true];

// console.log(nathanielData[2]);

// let height = nathanielData.push[1.8];

// nathanielData.push("1.89");
// console.log(nathanielData);

// nathanielData.shift();
// nathanielData.unshift();
// nathanielData.pop();

// const arr = [1, 4, 8, 9, 'Box', "a", "8", 0, 45, 89];

// function postionOfArray(arr, para) {
    
//     const answer = arr.indexOf(para)
//         if (answer => 0) {
//         return answer;
//         } else {
//             return -1;
//         }
// }
// console.log(postionOfArray(arr, 'Box'));

// let arrName = [10, 20, 30, 40, 50]

// function multiplyArray(arrName) {

//     const newArray = []

//     for (let i = 0; i < arrName.length; i++) {

//         return newArray.push arrName[i] * 2;
//     }
// }


// function sumNumbers(input) {
//     
//     let sum = 0;
//     for (let i = 0; i < input.length; i++){
//         sum += input[i];
//     }
//     return sum;
// }
// sumNumbers([10, 20, 30, 40, 50])

// function sumTwoNumbers(a, b) {

//     return  a + b; 
// }
// console.log(sumTwoNumbers(3, 5));

// function countNumbers(value) {
    
//     let value = true;
//     for (let i = 0; i < value.length; i++) 
//     {
        
//     }
// // }
// const obj = {
//     firstName: "Nathan",
//     lastName: "Doe",
//     age: 20,
// };
// console.log(obj);
// console.log(obj.firstName);

// let boolenValues = [false, true, false, true, true];
// let trueArray = [];
// let falseArray = [];
// let falseTrueArray = [];
// // let totalOrderArray =[];

// for (let i = 0; i < boolenValues.length; i++) {
//     if (boolenValues[i] == false) {
//         falseArray.push(boolenValues[i])
//     } else if (boolenValues[i] == true) {
//         trueArray.push(boolenValues[i])
//     }
// }
// // totalOrderArray.push(falseArray, trueArray);
// // totalOrderArray.push(trueArray);
// // falseArray.push(trueArray);

//  falseTrueArray.push(falseArray.length);
//  falseTrueArray.push(trueArray.length);
// // console.log(trueArray);
// // console.log(falseArray);
// // console.log(falseTrueArray)
// // console.log(falseArray);
// console.log(falseTrueArray);
// let myName = "Stantley"
// let splitName = myName.split('');
// let reverseName = splitName.reverse();
// let joinName = reverseName.join('');

// // console.log(typeof(joinName)); // converting a string to array then reversing the string than converting back to an array

// function convertString(stringValue) {
//     let str = ""
//     for (i = str.length - 1; i >= 0; i--){
//         str += stringValue[i];
//         }
//         return str;
// }

// console.log(convertString("Hellobag"));

// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(2,3,5,6,7,8));

function rest(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++){      
        
        result += numbers[i];   
    }
    return result;
}

// console.log(rest(2,3,4,5,6,7,8,9))

// the Spread operator (...)

// function logData(entry1, entry2, entry3,...entries) {
//     console.log("school", "");
// }

// const arr = [1,2,3,4];
// const arr1 = [3,4,5,6];

// const arr3 = [1, ...arr,5, ...arr1]

// console.log(arr3);

// function maxValue(array) {
//     return Math.max(...array);
// }

// // 
