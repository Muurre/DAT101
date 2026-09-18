"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
//Use JavaScript to calculate the following expression, ensuring the result is -34:
const orgMathExp = "2 + 3 * 2 - 4 * 6";
const newMathExp = "2 + 3 * (2 - 4) * 6";
const part1Answer = 2 + 3 * (2 - 4) * 6;
printOut(orgMathExp);
printOut(newMathExp);
printOut(part1Answer);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
//Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres. 
const millimeters = (25 * 1000) + (34 * 10);
const milliperinch = 25.4;
const sumPart2 = millimeters / milliperinch;
printOut(`25 metres and 34 centimetres is ${sumPart2.toFixed(2)} inches.`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
//Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes.

const part3Days = 3;
const part3Hours = 12;
const part3Minutes = 14;
const part3Seconds = 45;

const part3Answer= 
(part3Days * 24 * 60) + (part3Hours * 60) + part3Minutes + (part3Seconds / 60);
printOut(`3 days, 12 hours, 14 minutes, and 45 seconds is ${part3Answer} minutes.`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
//Convert 6,322.52 minutes to days, hours, minutes, and seconds.

const part4TotalMinutes = 6322.52;

let part4Calc = part4TotalMinutes / (60 * 24);
const part4Days = Math.floor(part4Calc);

part4Calc = (part4Calc - part4Days) * 24;
const part4Hours = Math.floor(part4Calc);

part4Calc = (part4Calc - part4Hours) * 60;
const part4Minutes = Math.floor(part4Calc);

const part4Seconds = Math.round((part4Calc - part4Minutes) * 60);

printOut(`6,322.52 minutes is ${part4Days} days, ${part4Hours} hours, ${part4Minutes} minutes, and ${part4Seconds} seconds.`);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
//Convert 54 dollars to Norwegian kroner, and print the price for both
const part5Dollars = 54;
const part5DollarExchangeRate = 76 / 8.6;
const part5Kroner = part5Dollars * part5DollarExchangeRate;
printOut(`54 dollars is ${Math.round(part5Kroner)} Norwegian kroner.`);

const part5KronerExchangeRate = 8.6 / 76;
const part5DollarsFromKroner = part5Kroner * part5KronerExchangeRate;
printOut(`${Math.round(part5Kroner)} Norwegian kroner is ${Math.round(part5DollarsFromKroner)} dollars.`);
printOut(newLine);  

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
//Create a variable that contains the following text:
//"There is much between heaven and earth that we do not understand."
const part6Text = "There is much between heaven and earth that we do not understand.";

printOut(` ${part6Text}`);
printOut(`the text has ${part6Text.length} characters.`);
printOut(`the character at position 19 is ${part6Text.charAt(19)}.`);
printOut(`the substring from 35 and 8 forward is ${part6Text.substring(35, 35 + 8)}.`);
printOut(`the word "earth" starts at position ${part6Text.indexOf("earth")}.`);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
//Comparison, print the values for the following expressions 
let part7Calc1 = 5 > 3;
printOut(`is 5 greater than 3? ${part7Calc1}`);

part7Calc1 = 7 >= 7;
printOut(`is 7 greater than or equal to 7? ${part7Calc1}`);

part7Calc1 = "a" > "b";
printOut(`is "a" greater than "b"? ${part7Calc1}`);

part7Calc1 = "1" < "a";
printOut(`is "1" less than "a"? ${part7Calc1}`);

part7Calc1 = "2500" < "abcd";
printOut(`is "2500" less than "abcd"? ${part7Calc1}`);

part7Calc1 = "arne" !== "thomas";
printOut(`is "arne" not equal to "thomas"? ${part7Calc1}`);

part7Calc1 = 2 === 5;
printOut(`is 2 equal to 5? ${part7Calc1}`);

part7Calc1 = ("abcd" > "bcd") === false; 
printOut (`is it false that "abcd" is greater than "bcd"? ${part7Calc1}`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
//Convert and print the following expressions:

let part8Calc = parseInt("254");
printOut(`from text "254" to number: ${part8Calc}`);

part8Calc = parseFloat("57.23");
printOut(`from text "57.23" to number: ${part8Calc}`);

part8Calc = Number ("25 kroner");
printOut(`from text "25 kroner" to number: ${part8Calc}`);

part8Calc = parseFloat("25 kroner");
printOut(`from text "25 kroner" to number: ${part8Calc}`);

part8Calc = parseInt("25 kroner");
printOut(`from text "25 kroner" to number: ${part8Calc}`);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
//Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).

let r = Math.floor(Math.random() * 360) + 1;
printOut(`Random number: ${r}`);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
//Use division (/) and modulus (%) to calculate how many weeks and days are in 131 days.
const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const days = totalDays % 7;

printOut(`131 days is ${weeks} weeks and ${days} days.`);


printOut(newLine);