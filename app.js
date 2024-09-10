//  //Chapter no 10
// //Q1
// var city = "Karachi";
// if (city === "Karachi") {
//     console.log("The City OF Lights");
// }
// //Q2
// if (x === y) {
//     var z = prompt("Enter the value of z?");
    
// }
// //Q3
// var zipCode = "10010";

// if (zipCode === "10010") {
//     alert("Karachi");
// } else {
//     alert("Please write correct city");
// }
// //Q4
// var x = 1;

// if (x === 1) {
//     x = 2;
// }
// console.log(x);



// // chapter no 11
// //Q1
// if (variable1 !== variable2) {

// }
// //Q2
// if (variable1 >= variable2) {
    
// }
// //Q3
// var number = 5;

// if (number !== 10) {
//     number = 10; 
// }

// console.log(number);
// //Q4
// var number1 = 5; 
// var number2 = 10; 

// if (number1 !== number2) {
//     alert("Congratulations!"); 
// }
// //Q5
// var firstName = prompt("Please enter your first name:");
// var anotherName = "John"; 
// if (firstName !== anotherName) {
//     alert("No match");
// }



// //Chapter no 12
// //Q1
// var firstValue = 10;
// var secondValue = 5;
// if (firstValue >= secondValue) {
//     alert("The first value is greater than or equal to the second value.");
// } else {
//     alert("The first value is less than the second value.");
// }
// //Q2
// var English = parseInt(prompt("Enter marks for subject 1:"));
// var Urdu = parseInt(prompt("Enter marks for subject 2:"));
// var Math = parseInt(prompt("Enter marks for subject 3:"));
// var Chemistry = parseInt(prompt("Enter marks for subject 4:"));
// var Biology = parseInt(prompt("Enter marks for subject 5:"));

// var totalMarks =English + Urdu + Math + Chemistry +  + Biology;

// var percentage = (totalMarks / 500) * 100;

// var grade;
// if (percentage >= 90) {
//     grade = "A+";
// } else if (percentage >= 80) {
//     grade = "A";
// } else if (percentage >= 70) {
//     grade = "B";
// } else if (percentage >= 60) {
//     grade = "C";
// } else if (percentage >= 50) {
//     grade = "D";
// } else {
//     grade = "Fail";
// }

// console.log("Total Marks: " + totalMarks);
// console.log("Percentage: " + percentage.toFixed(2) + "%");
// console.log("Grade: " + grade);

// //Q3
// var a = 5;

// if (a === 10) {
//     alert("a is 10");
// } else {
//     alert("The correct value of a is " + a);
// }
// //Q4
// var city = prompt("Enter a city:");

// if (city.toLowerCase() === "karachi") {
//     alert("Acknowledging it is Karachi.");
// } else if (city.toLowerCase() === "lahore") {
//     alert("Acknowledging it's Lahore.");
// } else {
//     alert("This city is not Karachi or Lahore.");
// }

// //chapter n0 13
// //Q1
// if (a === b && c === d) {
// }
// //Q2
// if (a === b || c !== d) {
// }
// //Q3
// if ((name === "Hamza" || name === "Arsalan") && age < 60) {
// }
// //Q4
// var firstVariable = 10;
// var secondVariable = 20;

// if (firstVariable < secondVariable || firstVariable > secondVariable) {
//     alert("The first variable is either less than or greater than the second variable.");
// }
// //Q5

// var firstName = "Hamza";
// var lastName = "Arsalan";

// var inputFirstName = prompt("Please enter your first name:");
// var inputLastName = prompt("Please enter your last name:");


// if (inputFirstName === firstName && inputLastName === lastName) {
//     alert("Welcome, " + firstName + " " + lastName + "!");
// } else {
//     alert("Your input does not match our records.");
// }


// //Chapter no 14
// //Q1
// var password = prompt("Enter your password:");

// if (password !== "") {
    
//     if (password.length <= 5) {
//         alert("Password must be greater than 5 characters.");
//     } else {
//         alert("OK");
//     }
// }
// //Q2
// if (a === 1) { 
//     if (c === "Max") { 
//         alert("OK"); 
//     } 
// }
// //Q3
// if (a === 1 && c === "Max") {
//     alert("OK");
// }
// //Q4
// var firstVariable = 10;
// var secondVariable = 10;

// if (firstVariable === secondVariable) {
//     if (firstVariable <= secondVariable) {
//         alert("Both conditions passed!");
//     }
// }

//chapter 9-11
// Q1
// var cityName = prompt("Enter the city name:");


// if (cityName === "karachi") {
//     alert("Welcome to the city of lights!");
// }
// Q2
// var gender = prompt("Enter your gender (male/female):");


// if (gender === "male") {
//     alert("Good Morning Sir.");
// } else if (gender === "female") {
//     alert("Good Morning Ma'am.");
// } else {
//     alert("Invalid input. Please enter 'male' or 'female'.");
// }
// //Q3

// var color = prompt("Enter the color of the road traffic signal (Red/Yellow/Green):");

// switch (color) {
//     case "RED":
//         alert("Must Stop");
//         break;
//     case "YELLOW":
//         alert("Ready to move");
//         break;
//     case "GREEN":
//         alert("Move now");
//         break;
//     default:
//         alert("Invalid input. Please enter 'Red', 'Yellow', or 'Green'.");
// }
// //Q4
// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));


// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car.");
// } else {
//     alert("You have sufficient fuel.");
// }



//chapter 12-13
//Q1
// function checkCharType(char) {
//     if (/[0-9]/.test(char)) {
//         console.log(char + " is a number.");
//     } else if (/[A-Z]/.test(char)) {
//         console.log(char + " is an uppercase letter.");
//     } else if (/[a-z]/.test(char)) {
//         console.log(char + " is a lowercase letter.");
//     } else {
//         console.log(char + " is not a number or letter.");
//     }
// }

// let inputChar = prompt("Enter a character: ");

// if (inputChar.length === 1) {
//     checkCharType(inputChar);
// } else {
//     console.log("Please enter only one character.");
// }
// //Q2
// function compareIntegers(num1, num2) {
//     if (num1 === num2) {
//         console.log("The two integers are equal.");
//     } else if (num1 > num2) {
//         console.log(num1 + " is larger than " + num2 + ".");
//     } else {
//         console.log(num2 + " is larger than " + num1 + ".");
//     }
// }

// let integer1 = parseInt(prompt("Enter the first integer: "));
// let integer2 = parseInt(prompt("Enter the second integer: "));

// if (!isNaN(integer1) && !isNaN(integer2)) {
//     compareIntegers(integer1, integer2);
// } else {
//     console.log("Please enter valid integers.");
// }
// //Q3
// function checkNumberType(number) {
//     if (number > 0) {
//         console.log(number + " is a positive number.");
//     } else if (number < 0) {
//         console.log(number + " is a negative number.");
//     } else {
//         console.log(number + " is zero.");
//     }
// }

// let userInput = parseFloat(prompt("Enter a number: "));

// if (!isNaN(userInput)) {
//     checkNumberType(userInput);
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }











